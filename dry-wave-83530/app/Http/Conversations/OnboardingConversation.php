<?php

namespace App\Http\Conversations;

use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\BotMan\Messages\Outgoing\Question;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;
use Botman\driverweb\WebDriver;
use ChrisKonnertz\StringCalc\StringCalc;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\File;
use App\Customer;
use App\Conversationz;
use App\ConversationId;
//use BotMan\BotMan\Messages\Attachments\File;
use BotMan\BotMan\Messages\Outgoing\OutgoingMessage;
use App\Http\Conversations\AgentConversation;
use App\UserReview;
use App\LiveChatNotification;
use Loilo\Fuse;
use Mpdf\Mpdf;
use Event;
use DB;
use PDF;
use \Datetime;
use App\User;
use App\AdminBusy;

class OnboardingConversation extends Conversation
{
    //use Notifiable;

    protected $email;
    protected $phoneNum;
    protected $name;
    protected $language;
    protected $userId;
    protected $values = [];
    protected $allQuestions = NULL;
    protected $mainSubCategories = NULL;
    protected $nlpCategories = [];
    protected $conversationId;

    public function run()
    {
        $this->mainSubCategories = DB::table("bot_subcategories")->get();//->whereNull("sub_category_id")
        $this->endCategories = DB::table("bot_subcategories")->where("has_sub",0)->get();
        
        $cd = DB::table("toggle_notification")->where("id",2)->first();
        
        if ($cd->on_off == 1){

                $question = Question::create('Klik Salah Satu Atau Taip Dalam Chat')
                        ->addButton(Button::create('Bahasa Malaysia')->value('Bahasa Malaysia'))
                        ->addButton(Button::create('English')->value('English'));
        
                    //  $this->fakeinsert(); //remove this later
                                // $origin = new DateTime($recentMessage->sendtime);
                                // $target = new DateTime();
                                // $interval = $origin->diff($target);
                                //////////////////////////////////////////////////////important////////////////
                $this->ask($question, function ($answer){
                
                    if ($answer->getText() == "Bahasa Malaysia" || $answer->getText() == "bahasa malaysia"){
                        $this->language = "Bahasa Malaysia";               
                        $this->say("Anda telah pilih Bahasa Malaysia");               
                        $this->askName();
                        
        
                        
                    }else if ($answer->getText() == "English" || $answer->getText() == "english"){
                        $this->language = "English";
                        $this->say("You have chosen English");                
                        $this->askName();              
                    }else{
                        return $this->repeat();
                    }
        
                }); 
        }else{
            $this->language = "Bahasa Malaysia"; 
            $this->askName();
        }

    }
    protected function beforeMainMenu(){
        $c = DB::table("toggle_notification")->where("id",1)->first();

        if ($c->on_off == 1){ 
            $beforeMainQuestion = Question::create('Klik Salah Satu')
            ->addButton(Button::create("Kategori Utama")->value("Kategori Utama"))
            ->addButton(Button::create("Live Chat")->value("Live Chat"));

            $this->createMessageDB("Kategori Utama,Live Chat");

            $this->ask($beforeMainQuestion, function ($answer) {
                if ($this->checkIfValid("Kategori Utama",$answer->getText()) == "valid"){
                // $this->editMessageDB("Kategori Utama");
                    $this->askMainMenu();
                }
                else if ($this->checkIfValid("Live Chat",$answer->getText()) == "valid"){
                // $this->editMessageDB("Live Chat");
                    $this->liveChat();
                }else{

                // $this->editMessageDB($answer->getText());
                    $this->say("Maaf,saya tidak faham. Sila cuba menu di bawah");
                    return $this->repeat();
                    //$this->allowNLP($answer);
                }  
            });
        }else{
            $this->askMainMenu();
        }
    }
    protected function fakeinsert(){
        $record = new Customer();
        //$record->firsttime = new DateTime();
        $record->phonenumber = 012;
        $record->name = "ygstest";
        $record->email = "testemail@email.com";
        $record->languageOfChoice = "bahasa malaysia";        
        $record->save();
        $this->userId = $record->id;
        $this->language = "Bahasa Malaysia";
        $this->beforeMainMenu();
    }    
    protected function doFeedback(){

        $thequestion = Question::create("Sila bagi 1 hingga 5")
        ->addButton(Button::create("1")->value("1"))
        ->addButton(Button::create("2")->value("2"))
        ->addButton(Button::create("3")->value('3'))
        ->addButton(Button::create("4")->value('4'))
        ->addButton(Button::create("5")->value('5'));

        $this->ask($thequestion, function ($answer){           

            if($answer == "1" || $answer == "5" || $answer == "2" || $answer == "3" || $answer == "4"){
                 $ur = new UserReview();
                 $ur->userid = $this->userId;
                 $ur->star = $answer->getText();

                $this->ask("Sila bagi maklum balas terhadap perkhidmatan kami", function ($answer) use ($ur){
                   
                    $u = Customer::find($this->userId);
                    $u->lasttime = new DateTime();
                    $ur->feedback = $answer->getText();   
                    $ur->save();
                    $this->say("Sekian, Terima Kasih. Harap saya dapat bantu anda.");
                    return true;     
                });
                 
               
            }else{
                return $this->repeat();
            }
        });

    }
    public function skipConversation()
    {
        return true;
    }

    protected function askPnum(){
        $this->ask('Sila nyatakan nombor telefon anda.', function ($answer) {
            // var_dump(is_numeric($answer->getText()));
            if (is_numeric($answer->getText()) === true && strlen($answer->getText()) > 9){
                $this->phoneNum = $answer->getText();
                //create client here
                $record = new Customer();
                //$record->firsttime = new DateTime();
                $record->phonenumber = $this->phoneNum;
                $record->name = $this->name;
                $record->email = $this->email;
                $record->languageOfChoice = $this->language;
                $record->save();
                
                $this->userId = $record->id;

                $this->beforeMainMenu();
            }else{
                return $this->repeat('Nombor tidak sah, Sila cuba lagi'); 
            }            
        }); 
    }
    protected function askEmail(){
        $this->ask('Sila nyatakan emel anda.', function ($answer) {
            $test = filter_var($answer, FILTER_VALIDATE_EMAIL);
            if($test !== false){
                $this->email = $answer->getText();                        
                $this->askPnum();                                   
            }else{            
                return $this->repeat('Emel tidak sah, Sila cuba lagi');
            }
        }); 
    }
    protected function askName(){
        $this->ask('Sila nyatakan nama anda.', function ($answer) {
            if (preg_match('~[0-9]~', $answer->getText()) > 0){
                $this->repeat();
            }else{
                $this->name = $answer->getText();
                $this->askEmail();
            }             
        }); 
    }
    protected function stopConvo(){
        $thequestion = Question::create("Anda Mahu Teruskan Pertanyaan?")
        ->addButton(Button::create("TIDAK")->value("TIDAK"))
        ->addButton(Button::create("YA")->value("YA"));
        $this->createMessageDB("Anda Mahu Teruskan Pertanyaan?");
        $this->ask($thequestion, function ($answer){
            if ($this->checkIfValid($answer->getText(),"YA") == "valid"){
                $this->editMessageDB($answer->getText());
                $this->askMainMenu();   
            }
            else if ($this->checkIfValid($answer->getText(),"TIDAK") == "valid"){
                $this->editMessageDB($answer->getText());
                $this->doFeedback();   
            }else{
                return $this->repeat();
            }
            
        });
        
    }
    protected function createMessageDB($message){
        $m = new Conversationz();
        $m->message = "empty";
        $m->clientId = 0;
        $m->recipient = $this->userId;
        $m->sendtime = new DateTime();
        $m->botMsg = $message;
        $m->save();
        $this->conversationId = $m->id;
    }
    protected function editMessageDB($message){
        $m = Conversationz::find($this->conversationId);
        $m->message = $message;
        $m->receivetime = new DateTime();
        $m->save();
        $u = Customer::find($this->userId);
        $u->lasttime = new DateTime();
        $u->save();
    }
    protected function askMainMenu(){
        $mainQuestion = Question::create('Klik Salah Satu');

        //take main categories from the database
        $main_categories = DB::table('bot_category')->get();

        // foreach ($otherMenus as $key => $value) {
        //     $mainQuestion->addButton(Button::create($value->name)->value($value->name));
        // }
        $message = "";
        foreach ($main_categories as $key => $value) {
            $message = $message . "," . $value->category_name;
            $mainQuestion->addButton(Button::create($value->category_name)->value($value->category_name));
        }
        // $message = $message . "," . "Live Chat";
        // $mainQuestion->addButton(Button::create("Live Chat")->value("Live Chat"));
        $this->createMessageDB($message);
        $this->ask($mainQuestion, function ($answer) use ($main_categories){
            $found = 0;
            $idofcat = 0;
            foreach ($main_categories as $key => $value) {              
                if ($this->checkIfValid($value->category_name,$answer->getText()) == "valid"){
                    $found = 1;
                    $this->editMessageDB($answer->getText());
                    $idofcat = $value->id;
                }
            }
            // foreach ($otherMenus as $key => $value) {
            //     if ($this->checkIfValid($value->name,$answer->getText()) == "valid"){
            //         $found = 1;
            //         $idofcat = $value->id;
            //     }            
            // }
            if ($found == 1){
                $this->say("Anda telah pilih " . $answer->getText());
                $this->processSubCategories($idofcat);
            }
            // }else if($this->checkIfValid($answer->getText(),"Live Chat") == "valid"){
            //     $this->editMessageDB("Live Chat");
            //     $this->liveChat();
            // }
            else{
                $this->say("Maaf,saya tidak faham. Sila cuba menu di bawah");
                return $this->repeat();
                //$this->allowNLP($answer);
            }           
        });
    }

    protected function liveChat(){
            //check if got available admin
            $foundz = 0;
           // $noactive = 1;
            $admins = User::where("role",1)->get();
            foreach ($admins as $key => $value) {
                // if ($value->last_login !== NULL && $value->last_logout === NULL){
                //     $noactive = 0;

                    $found = AdminBusy::find($value->id);
                                    //var_dump($found);
                                    if (!$found){
                                        $foundz = 1;
                                        break;
                                    }
                //}                
            }
            //got free admin
            if ($foundz == 1){
                //check if got a request on hold
                $requestOnHold = liveChatNotification::where("waiting",0)->first();
                if ($requestOnHold){
                    // $live_chat = new liveChatNotification();
                    // $live_chat->userid = $this->userId;
                    // $live_chat->language = $this->language;
                    // $live_chat->waiting = 1;
                    // $live_chat->who = "admin"; 
                    // $live_chat->save();
                    //update customer when transfered
                    $total = liveChatNotification::all();
                    $posi = count($total) + 1;
                    $c = Customer::find($this->userId);
                    $c->transferTime = new DateTime();
                    $c->channelId = rand(1000,9999) . $this->userId . rand(1000,9999);
                    $c->save();
                    $question = Question::create('Klik Butang Di Bawah');
                    $message = "Masuk Live Chat";
                    $question->addButton(Button::create("Masuk Live Chat")->value("Masuk Live Chat")->additionalParameters(["link"=>"/public/client?id=" . $c->channelId]));

                    $this->createMessageDB($message);
                    $this->ask($question, function ($answer) use ($posi){
                       if($answer->isInteractiveMessageReply()){                                                 
                            $live_chat = new liveChatNotification();
                            $live_chat->userid = $this->userId;
                            $live_chat->language = $this->language;
                            $live_chat->who = "admin";
                            $live_chat->waiting = 1;
                            $live_chat->save();                        

                            $cid = new ConversationId();
                            $cid->receipent = "client";
                            $cid->clientid = $this->userId;
                            $cid->agentid = 0;
                            $cid->message = "Sila Tunggu Untuk Ejen Kami Masuk dan anda diminta tidak tutup window ini selagi sesi tidak habis.";
                            $cid->save();   
                            
                            $cid = new ConversationId();
                            $cid->receipent = "client";
                            $cid->clientid = $this->userId;
                            $cid->agentid = 0;
                            $cid->message = "Kedudukan anda dalam list: " . $posi;
                            $cid->save();

                        }
                      else{
                            return $this->repeat();
                      }
                    });
                    // //$ready = 0;
                    // $this->ask("Sila tunggu untuk ejen kami respon....", function ($answer){
                    //     Event::listen($this->userId . ".agentmsg", function($m)
                    //     {
                    //         var_dump("ff");
                    //         $this->timeToChat($m);                
                    //     });
                    //     return $this->repeat();                       
                    // });
                }else{

                    $c = Customer::find($this->userId);
                    $c->transferTime = new DateTime();
                    $c->channelId = rand(1000,9999) . $this->userId . rand(1000,9999);
                    $c->save();

                    $question = Question::create('Klik Butang Di Bawah');
                    $message = "Masuk Live Chat";
                    $question->addButton(Button::create("Masuk Live Chat")->value("Masuk Live Chat")->additionalParameters(["link"=>"/public/client?id=" . $c->channelId]));

                    $this->createMessageDB($message);
                    $this->ask($question, function ($answer){
                        if($answer->isInteractiveMessageReply()){
                            // $c = Customer::find($this->userId);
                            // $c->transferTime = new DateTime();
                            // $c->channelId = rand(1000,9999) . $this->userId . rand(1000,9999);
                            // $c->save();                            
                            $live_chat = new liveChatNotification();
                            $live_chat->userid = $this->userId;
                            $live_chat->language = $this->language;
                            $live_chat->who = "admin";
                            $live_chat->save();
                            $cid = new ConversationId();
                            $cid->receipent = "client";
                            $cid->clientid = $this->userId;
                            $cid->agentid = 0;
                            $cid->message = "Sila Tunggu Untuk Ejen Kami Masuk dan anda diminta tidak tutup window ini selagi sesi tidak habis.";
                            $cid->save();
                        }
                        else{
                            return $this->repeat();
                        }
                    });

                    // $this->say("Sila tunggu untuk ejen kami respon....");
                    //$this->timeToChat();
                    //sleep(10);
                    //$c = ConversationId::where("clientid",$this->userId)->where("receipent","client")->first();
                    //var_dump($c->message);
                    // while ($ready == 0) {
                    //     if ($first != 1){
                    //         $this->say("Sila tunggu untuk ejen kami respon....");
                    //         $first = 1;
                    //     }
                        
                      
                    //     if (isset($c[0])){
                    //         $ready = 1;
                    //         $this->bot->startConversation(new AgentConversation);
                    //     }                        
                    // }
                
            }
            }else{
               // if ($noactive == 0){
                    $this->say("Ejen sedang layan pelanggan lain, Sila cuba sebentar lagi atau guna bot kami.");
                // }else{
                //     $this->say("Tiada Ejen Dijumpai");
                // }
                $this->askMainMenu();
            }
            
            // $finish = 0;
            // while ($finish == 0) {
            //    sleep(2);
            //    $f = db::table('customer')->where("userid",$d)->get();
            //    if (count($f) != 0){
            //       // var_dump($f);
            //        $this->say($f[0]->message);
            //        $finish = 1;
            //    }
            // }
        /////////////THIS FOR TRANSFER TO AGENT////////////////
    }
    protected function allowNLP($answer){
        $this->editMessageDB($answer->getText());
        $array_of_possibilities = $this->donlplikesearch($answer->getText());
        //var_dump($array_of_possibilities);
                if (count($array_of_possibilities) < 1){
                    $this->createMessageDB("Saya tidak faham,Sila cuba lagi atau gunakan menu di bawah");
                    $this->say("Saya tidak faham,Sila cuba lagi atau gunakan menu di bawah");
                    return $this->repeat();
                }else{
                    $excount = 0;
                    $exploded = explode(" ",$answer->getText());
                    $thisone = NULL;
                    // var_dump($array_of_possibilities);
                    // var_dump(1);
                    foreach ($array_of_possibilities as $key => $value) {
                        $count = 0;
                        if (isset($value['sub_category_name'])){
                            
                            foreach ($exploded as $explo) {                            
                                if (str_contains(strtolower($value['sub_category_name']),strtolower($explo)) === true){                               
                                    $count = $count + 1;
                                }
                            }
                            if ($count == 0){
                                foreach ($this->mainSubCategories as $v) {
                                    if ($v->sub_category_name == $value['sub_category_name']){
                                        
                                        $thisone = $v;
                                        
                                    }
                                }
                            }
                            
                            if ($excount < $count){
                                $excount = $count;
                                foreach ($this->mainSubCategories as $v) {
                                    if ($v->id == $value['id']){
                                        
                                        $thisone = $v;
                                        
                                    }
                                }
                            }
                        }else{
                            
                            foreach ($this->mainSubCategories as $v) {
                                if ($v->id == $value['id']){
                                    $thisone = $v;                                    
                                }
                            }
                        }
                        
                    }
                    
                    if ($thisone->has_sub == 1){
                        $nextSubs = DB::table("bot_subcategories")->where("sub_category_id",$thisone->id)->get();
                        $this->askSubCategories($nextSubs);
                    }else{
                        
                        $this->getFirstQuestion($thisone);
                    }                   
                }

    }
    protected function processSubCategories($idofcat){
        $subcats = DB::table("bot_subcategories")->where("bot_category_id",$idofcat)->get();
        
        $this->askSubCategories($subcats);
    }
    protected function processSubSubCategories($id){
        $subcats = DB::table("bot_subcategories")->where("sub_category_id",$id)->get();
        $this->askSubCategories($subcats);
    }
    protected function askSubCategories($subcats){
            $question = Question::create('Klik Salah Satu');
            $message = "";
            foreach ($subcats as $key => $value) {
                $message = $message . "," . $value->sub_category_name;
                $question->addButton(Button::create($value->sub_category_name)->value($value->sub_category_name));
            }
            $this->createMessageDB($message);

            $this->ask($question, function ($answer) use ($subcats){
                $found = 0;
                $idofcat = 0;
                $chosenSubcat = NULL;

                foreach ($subcats as $key => $value) {              
                    if ($this->checkIfValid($answer->getText(),$value->sub_category_name) == "valid"){
                        $found = 1;

                        $chosenSubcat = $value;
                    }
                }
                if ($found == 1){
                    $this->say("Anda telah pilih " . $chosenSubcat->sub_category_name);
                    $this->editMessageDB($answer->getText());
                    //check if got category below it
                    if ($chosenSubcat->id == 33){
                        $this->mykadapi();
                    }
                    if ($chosenSubcat->has_sub == 1){
                         $this->processSubSubCategories($chosenSubcat->id);
                    }else{
                        $this->getFirstQuestion($chosenSubcat);
                    }                   
                }else{
                    $this->say("Maaf,saya tidak faham. Sila cuba menu di bawah");
                    return $this->repeat();
                        //$this->allowNLP($answer);
                    
                }   
                
            });
    }
    protected function getFirstQuestion($subcat){
        $questions = DB::table("bot_questions")->where("category_id",$subcat->id)->get();
        $this->allQuestions = $questions;
        foreach ($questions as $key => $value) {
            if ($value->first == 1){
                $this->processQuestion($value);
            }
        }
    }
    protected function mykadapi(){
        $this->ask("Sila masukkan nombor myKad anda (tanpa '-')", function ($answer) use ($value){
            if (is_numeric($answer->getText()) === true){
                $question = ["subcategory"=>6];
                $this->callApi(1,$answer->getText(),$question);
            }else{
                return $this->repeat();
            }

        });
    }
    protected function getEndingMenu($question){
        $this->values = [];
        $otherEndMenus = DB::table("end_selections")->where("subcategory",$question->category_id)->get();
        $mainQuestion = Question::create('Klik Salah Satu');
         $message = "";
         foreach ($otherEndMenus as $key => $value) {
            $message = $message . "," . $value->name;

            if ($value->link != "" && $value->link !== NULL && $value->link != " "){
                $mainQuestion->addButton(Button::create($value->name)->value($value->name)->additionalParameters(["link"=>$value->link]));
            }else{
                $mainQuestion->addButton(Button::create($value->name)->value($value->name));
            }
        }
        $mainQuestion->addButton(Button::create("Menu Utama")->value("Menu Utama"));
        $mainQuestion->addButton(Button::create("Tamatkan Sesi")->value("Tamatkan Sesi"));

        $message = $message . "," . "Menu Utama" . ',' . "Tamatkan Sesi";
        $this->createMessageDB($message);

        $this->ask($mainQuestion, function ($answer) use ($otherEndMenus,$question){
            $found = 0;
            foreach ($otherEndMenus as $key => $value) {
                  
                if ($this->checkIfValid($value->name,$answer->getText()) == "valid"){
                    $found = 1;
                    $this->editMessageDB($answer->getText());
                    if($value->id == 1){
                        $this->say("Anda telah pilih " . $answer->getText());
                        $this->ask("Sila masukkan nombor myKad anda (tanpa '-')", function ($answer) use ($value,$question){
                            if (is_numeric($answer->getText()) === true){
                                $this->callApi($value->id,$answer->getText(),$question);
                            }else{
                                return $this->repeat();
                            }

                        });
                        
                    }
                    
                }
            }
            if ($this->checkIfValid($answer->getText(),"Menu Utama") == "valid"){
                $found = 1;
                $this->editMessageDB($answer->getText());
                $this->askMainMenu();
            }
            if ($this->checkIfValid($answer->getText(),"Tamatkan Sesi") == "valid"){
                $found = 1;
                $this->editMessageDB($answer->getText());
                $this->stopConvo();
            }
            if ($found != 1){
                if ($answer->isInteractiveMessageReply()){
                    return $this->repeat();            
                }else{
                     $this->say("Maaf,saya tidak faham. Sila cuba menu di bawah");
                     return $this->repeat();  
                }                         
                //$this->allowNLP($answer);                
            }
        });
        //$this->askMainMenu($otherEndMenus);
    }
    protected function processQuestion($subcat){
        if (str_contains($subcat->question,"{calculated}") === true){
            $this->processCalculatedQuestion($subcat);
        }else{
            $this->prepareQuestion($subcat);
        }        
    }
    protected function callApi($id,$mykadNum,$question){
        if ($id == 1){
            $mykadvalidationlink = DB::table("dynamic_variables")->where("id",2)->get();
            $displayRecordBayaranLink = DB::table("dynamic_variables")->where("id",3)->get();
            $response = Http::asForm()->post($mykadvalidationlink[0]->value,[
                'mykad' => $mykadNum,
                'requestType' => 'kutipan',
                'btnsimpan' => 'simpan'
            ]);
            $respon = $response->json();
            $correctCount = 0;
            
           //var_dump($respon);
           if ($respon !== NULL && $respon['status'] == "Fail"){
               $this->say($respon['error']);
               $this->getEndingMenu($question);
           }else{

            $first = rand(2003,$respon['question'][0]["answer1"]-1);
            $second = rand(2003,$respon['question'][0]["answer1"]-1);
            $third = rand(2003,$respon['question'][0]["answer1"]-1);
            $position = rand(1,4);

            if ($position == 1){
                $thequestion = Question::create("Anda perlu jawab 2 daripada 3 soalan dengan betul. 1)" . $respon['question'][0]["question1"])
                ->addButton(Button::create($respon['question'][0]["answer1"])->value($respon['question'][0]["answer1"]))
                ->addButton(Button::create($first)->value($first))
                ->addButton(Button::create($second)->value($second))
                ->addButton(Button::create($third)->value($third));
            }
            else if ($position == 2){
                $thequestion = Question::create("Anda perlu jawab 2 daripada 3 soalan dengan betul. 1)" . $respon['question'][0]["question1"])
                ->addButton(Button::create($first)->value($first))
                ->addButton(Button::create($respon['question'][0]["answer1"])->value($respon['question'][0]["answer1"]))
                ->addButton(Button::create($second)->value($second))
                ->addButton(Button::create($third)->value($third));
            }else if ($position == 3){
                $thequestion = Question::create("Anda perlu jawab 2 daripada 3 soalan dengan betul. 1)" . $respon['question'][0]["question1"])
                ->addButton(Button::create($first)->value($first))
                ->addButton(Button::create($second)->value($second))
                ->addButton(Button::create($respon['question'][0]["answer1"])->value($respon['question'][0]["answer1"]))
                ->addButton(Button::create($third)->value($third));
            }else{
                $thequestion = Question::create("Anda perlu jawab 2 daripada 3 soalan dengan betul. 1)" . $respon['question'][0]["question1"])
                ->addButton(Button::create($first)->value($first))
                ->addButton(Button::create($second)->value($second))
                ->addButton(Button::create($third)->value($third))
                ->addButton(Button::create($respon['question'][0]["answer1"])->value($respon['question'][0]["answer1"]));
            }

            $this->ask($thequestion, function ($answer) use ($respon,$correctCount,$question,$displayRecordBayaranLink,$mykadNum) {       

                if ($answer->getText() == $respon['question'][0]["answer1"]){
                   $correctCount = $correctCount + 1;                
                }

                $first = rand(1,$respon['question'][0]["answer2"]-1);
                $second = rand(1,$respon['question'][0]["answer2"]-1);
                $third = rand(1,$respon['question'][0]["answer2"]-1);
                $position = rand(1,4);
                $qq = "2) " . $respon['question'][0]["question2"];
                if ($position == 1){
                   
                    $thequestion = Question::create($qq)
                    ->addButton(Button::create($respon['question'][0]["answer2"])->value($respon['question'][0]["answer2"]))
                    ->addButton(Button::create($first)->value($first))
                    ->addButton(Button::create($second)->value($second))
                    ->addButton(Button::create($third)->value($third));
                }
                else if ($position == 2){
                    $thequestion = Question::create($qq)
                    ->addButton(Button::create($first)->value($first))
                    ->addButton(Button::create($respon['question'][0]["answer2"])->value($respon['question'][0]["answer2"]))
                    ->addButton(Button::create($second)->value($second))
                    ->addButton(Button::create($third)->value($third));
                }else if ($position == 3){
                    $thequestion = Question::create($qq)
                    ->addButton(Button::create($first)->value($first))
                    ->addButton(Button::create($second)->value($second))
                    ->addButton(Button::create($respon['question'][0]["answer2"])->value($respon['question'][0]["answer2"]))
                    ->addButton(Button::create($third)->value($third));
                }else{
                    $thequestion = Question::create($qq)
                    ->addButton(Button::create($first)->value($first))
                    ->addButton(Button::create($second)->value($second))
                    ->addButton(Button::create($third)->value($third))
                    ->addButton(Button::create($respon['question'][0]["answer2"])->value($respon['question'][0]["answer2"]));
                }

                $this->ask($thequestion, function ($answer) use ($respon,$correctCount,$question,$displayRecordBayaranLink,$mykadNum) {
                    if (is_numeric($answer->getText()) === false){
                        return $this->repeat();
                    }
                    if ($answer->getText() == $respon['question'][0]["answer2"]){
                        $correctCount = $correctCount + 1;                
                    } 
                    $requestdate = date('d F Y');

                    //start q3
                    $qq = "3) " . $respon['question'][0]['question3'];
                    $position = rand(1,4);
                    $thequestion = $this->q3($position,$qq,$respon['question'][0]["answer3"]);
                    //endq3

                    $this->ask($thequestion, function ($answer) use ($respon,$correctCount,$question,$displayRecordBayaranLink,$mykadNum,$requestdate) {
                        
                        if (strtolower($answer->getText()) == strtolower($respon['question'][0]["answer3"])){
                            $correctCount = $correctCount + 1;                
                        } 
                            if ($correctCount < 2){
                                $this->say("Anda telah gagal untuk menjawab 2 soalan dengan betul.");
                                $this->getEndingMenu($question);
                            }else{
                                //second api
                                //781016145437
                              //  $this->say("Penyata Zakat Anda Sedang Diproses");
                              $this->ask("Sila Masukkan Tahun Rekod Yang Anda Mahu Cari",function ($answer) use ($respon,$correctCount,$question,$displayRecordBayaranLink,$mykadNum,$requestdate){
                                    if (is_numeric($answer->getText()) === true){  
                                                $response = Http::asForm()->post($displayRecordBayaranLink[0]->value,[
                                                    'mykad' => $mykadNum,
                                                    'requestType' => 'kutipan',
                                                    'btnsimpan' => 'simpan',
                                                    'recordGUID' => $respon['recordGUID'],
                                                    'validation' => "yes",
                                                    'year' => $answer->getText()
                                                ]);
                                                    
                                                $respon2 = $response->json();

                                                if (empty($respon2['paymentHistory'])){

                                                    $this->say("Tiada Rekod");
                                                    $this->getEndingMenu($question);


                                                }else{
                                                    
                                                $thepath = public_path() . '/' . $mykadNum . $this->userId . $respon['recordGUID'] . "-penyata.pdf";
                                                
                                                $pdfwriter = new Mpdf();
                                                $tablerecords = "";
                                                $totalZakat = 0;
                                                foreach ($respon2['paymentHistory'] as $key => $value) {
                                                    $totalZakat = $totalZakat + $value['jumlahzakat'];
                                                    if ($key === array_key_last($respon2['paymentHistory'])){
                                                    $tablerecords = $tablerecords . "<tr>" . "<td style='text-align: center; vertical-align: middle; border-bottom: 1px solid;'>" . date_format(new DateTime($value['tarikh']),"d/m/Y") . "</td><td style='text-align: center; vertical-align: middle; border-bottom: 1px solid;'>" . $value['jeniszakat'] . "</td><td style='text-align: center; vertical-align: middle; border-bottom: 1px solid;'>" . $value['bulan'] . "/" . $value['haul'] . "</td><td style='text-align: center; vertical-align: middle; border-bottom: 1px solid;'>" . number_format($value['jumlahzakat']) . "</td></tr>";
                    
                                                    }else{
                                                    $tablerecords = $tablerecords . "<tr>" . "<td style='text-align: center; vertical-align: middle;'>" . date_format(new DateTime($value['tarikh']),"d/m/Y") . "</td><td style='text-align: center; vertical-align: middle;'>" . $value['jeniszakat'] . "</td><td style='text-align: center; vertical-align: middle;'>" . $value['bulan'] . "/" . $value['haul'] . "</td><td style='text-align: center; vertical-align: middle;'>" . number_format($value['jumlahzakat']) . "</td></tr>";
                                                    }
                                                }
                    
                                                $tablerecords = $tablerecords . "<tr><td></td><td></td><td></td><td style='text-align: center; vertical-align: middle;'><b>" . number_format($totalZakat) . "</b></td></tr>                       
                                                </table>" .
                                                "<br>
                                                <br>
                                                <p>Bagi pembayar zakat individu, penyata ini boleh dikemukakan kepada LHDN bagi tujuan tuntutan <b>rebat cukai</b> di bawah Seksyen 6A(J), Akta Cukai Pendapatan 1967, Bagi pembayar zakat bukan individu pula, penyata ini boleh dikemukakan kepada LHDN bagi tujuan tuntutan <b>tolakan cukai</b> di bawah Seksyen 44 (11A), Akta Cukai Pendapatan 1967.
                                                <br><p>Penyata ini adalah cetakan komputer. Tandatangan tidak diperlukan.
                                                <br><br><p style='color: grey; text-align: left;'>www.zakatselangor.com.my &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; zakat 1 kewajipan... berzakatlah</p>
                                                ";                           ;
                    
                                                $pdfwriter->WriteHTML('<center style="text-align: center;">
                                                <img style="width:50%" src="' . url('/') . '/zakat-sel-logo.png' . '">' 
                                                . '</center>
                                                <center style="text-align: center;">
                                                <b style="font-size: 18px;">Penyata Maklumat Bayaran Zakat</b>
                                                </center>
                                                <p style="text-align: right;">' . date('d F Y') . '</p>                           
                    
                                                <u style="text-align: left;font-size: 15px;"><b>Maklumat Pembayar:</b></u>
                                                <p style="text-align: left;font-size: 13px;">' . $respon2['nama'] . '</p>
                                                <p style="text-align: left;font-size: 14px;">' . 'No. KP Baru: ' . $respon2['mykad'] . '</p>
                                                <br><br>
                                                <u style="text-align: left;font-size: 15px;"><b>Maklumat Bayaran Zakat:</b></u>
                                                <br><br> 
                                                <table autosize="1">
                                                <tr>
                                                <th style="width: 5cm;border-bottom: 1px solid;">TARIKH</th>
                                                <th style="width: 5cm;border-bottom: 1px solid;">JENIS BAYARAN</th>
                                                <th style="width: 5cm;border-bottom: 1px solid;">BULAN/HAUL</th>
                                                <th style="width: 5cm;border-bottom: 1px solid;">JUMLAH(RM)</th>
                                                </tr>                            
                                                ' . $tablerecords);
                                                $pdfwriter->Output($thepath,'F');  
                                                $qq = Question::create('Klik Di Sini')->addButton(Button::create('Lihat Penyata Zakat')->value('Muat Turun Penyata Zakat')->additionalParameters(["link"=>url('/') . '/' . $mykadNum . $this->userId . $respon['recordGUID'] . "-penyata.pdf"]));

                                                $this->ask($qq, function($answer) use ($question){
                                                    //unlink($thepath);
                                                    $this->getEndingMenu($question);

                                                });
                                        }
                                        
                                      
                                    }else{
                                        return $this->repeat();
                                    }
                              });           
                
                            }
                    });
                });
           }); 
        }

       
        }
    }

    protected function q3($position,$qq,$answer){
        $ignorethis = 0;
        $a = -1;
        $listofzakat = array("FIDYAH","SEDEKAH","WANG TIDAK PATUH SYARIAH","SAHAM WAKAF","PENDAPATAN", "PERNIAGAAN", "SIMPANAN","SAHAM","KWSP","EMAS","PERAK","EMAS PERHIASAN","EMAS LAIN-LAIN", "QADHA", "HARTA", "TANAMAN", "PADI", "PADI MELALUI AMIL","TERNAKAN","FITRAH");
        
        foreach ($listofzakat as $key => $value) {
            if ($value == $answer){
                $ignorethis = $key;
            }
        }

        while ($a < 0) {
            $first = rand(0,19);
            if ($first != $ignorethis){
                $a = 99;
            }
        }
        $a = -1;
        while ($a < 0) {
            $second = rand(0,19);
            if ($first != $ignorethis){
                $a = 99;
            }
        }
        $a = -1;
        while ($a < 0) {
            $third = rand(0,19);
            if ($first != $ignorethis){
                $a = 99;
            }
        }
        $a = -1;

        if ($position == 1){          
            $thequestion = Question::create($qq)
            ->addButton(Button::create($answer)->value($answer))
            ->addButton(Button::create($listofzakat[$first])->value($listofzakat[$first]))
            ->addButton(Button::create($listofzakat[$second])->value($listofzakat[$second]))
            ->addButton(Button::create($listofzakat[$third])->value($listofzakat[$third]));
        }
        else if ($position == 2){
            $thequestion = Question::create($qq)
            ->addButton(Button::create($listofzakat[$first])->value($listofzakat[$first]))
            ->addButton(Button::create($answer)->value($answer))
            ->addButton(Button::create($listofzakat[$second])->value($listofzakat[$second]))
            ->addButton(Button::create($listofzakat[$third])->value($listofzakat[$third]));
        }else if ($position == 3){
            $thequestion = Question::create($qq)
            ->addButton(Button::create($listofzakat[$first])->value($listofzakat[$first]))
            ->addButton(Button::create($listofzakat[$second])->value($listofzakat[$second]))
            ->addButton(Button::create($answer)->value($answer))
            ->addButton(Button::create($listofzakat[$third])->value($listofzakat[$third]));
        }else{
            $thequestion = Question::create($qq)
            ->addButton(Button::create($listofzakat[$first])->value($listofzakat[$first]))
            ->addButton(Button::create($listofzakat[$second])->value($listofzakat[$second]))
            ->addButton(Button::create($listofzakat[$third])->value($listofzakat[$third]))
            ->addButton(Button::create($answer)->value($answer));
        }
        return $thequestion;
    }

    protected function processCalculatedQuestion($subcat){
        $logic_temp = $this->replaceTheTags($subcat->logic);
       //var_dump(str_replace(" ","",$logic_temp));
        $calculated = $this->calculate(str_replace(" ","",$logic_temp));
        
        $subcat->question = str_replace("{calculated}",$calculated,$subcat->question);
        $this->prepareQuestion($subcat);
    }
    protected function justDoCalculationOnly($logic){
        $logic_temp = $this->replaceTheTags($logic);
        $calculated = $this->calculate($logic_temp);
        return $calculated;
    }
    protected function prepareQuestion($question){
        if($question->requiredAnswers === null || $question->requiredAnswers == "" || $question->requiredAnswers == " "){
            $this->say($question->question);
            $this->getEndingMenu($question);
        }else{
            if ($question->link !== NULL && $question->link != "" && $question->link != " "){
                $this->createMessageDB($question->button);
            }else{
                $this->createMessageDB($question->question);
            }
            $this->askQuestion($question);
        }
    }    
    protected function askQuestion($question){
        if ($question->button == "" || $question->button == " " || $question->button === NULL){
            if ($question->requiredAnswers == "number"){
                if ($question->logic == "" || $question->logic == " " || $question->logic === NULL){
                            $this->ask($question->question, function ($answer) use ($question){                             
                                        if (is_numeric($answer->getText()) === true ){  
                                            $this->editMessageDB($answer->getText());                                      
                                            array_push($this->values,$answer->getText());
                                            foreach ($this->allQuestions as $key => $value) {
                                                if ($value->id == $question->trueRoute){
                                                    $this->processQuestion($value);
                                                }
                                            }
                                        }else{
                                            return $this->repeat();
                                        }
                            }); 
                }else{
                    $this->ask($question->question, function ($answer) use ($question){   
                        if (is_numeric($answer->getText()) === true ){

                            array_push($this->values,$answer->getText());
                             $this->editMessageDB($answer->getText());   
                            if(str_contains($question->logic, '>') === true ){
                                if ($this->readNprocessLogic($question->logic,'>') === true){
                                    foreach ($this->allQuestions as $key => $value) {
                                        if ($question->trueRoute == $value->id){
                                            $this->processQuestion($value);
                                        } 
                                    }
                                }else{
                                    foreach ($this->allQuestions as $key => $value) {
                                        if ($question->falseRoute == $value->id){
                                            $this->processQuestion($value);
                                        } 
                                    }
                                }                            
                            }else if (str_contains($question->logic, '<') === true){
                                if ($this->readNprocessLogic($question->logic,'<') === true){
                                    foreach ($this->allQuestions as $key => $value) {
                                        if ($question->trueRoute == $value->id){
                                            $this->processQuestion($value);
                                        } 
                                    }
                                }else{
                                    foreach ($this->allQuestions as $key => $value) {
                                        if ($question->falseRoute == $value->id){
                                            $this->processQuestion($value);
                                        } 
                                    }
                                }
                            }else{
                                //docalculation
                                $calculated = $this->justDoCalculationOnly($question->logic);
                                array_push($this->values,$calculated);
                                foreach ($this->allQuestions as $key => $value) {
                                    if ($question->trueRoute == $value->id){
                                        $this->processQuestion($value);
                                    } 
                                }
                            } 
                        }else{
                            return $this->repeat();
                        }
                    });                                                              
                }  
            }else{
                $this->ask($question->question, function ($answer) use ($question){                             
                    $found = 0;
                    foreach (explode(',',$question->requiredAnswers) as $key => $value) {
                        if ($this->checkIfValid($answer->getText(),$value) == "valid"){
                            $this->editMessageDB($answer->getText());   
                            $found = 1;
                            $chosenValue = $value;
                            $chosenKey = $key;
                        }
                    }
                    if ($found == 1){
                        array_push($this->values,$chosenValue);
                        if(str_contains($question->trueRoute, ',') === true){
                            $exploded = explode(',',$question->trueRoute);
                            $trueRoute = $exploded[$chosenKey];
                            foreach ($this->allQuestions as $key => $value) {
                                if ($value->id == $trueRoute){
                                    $this->processQuestion($value);
                                }                              
                            }
                        }else{
                            foreach ($this->allQuestions as $key => $value) {
                                if ($value->id == $question->trueRoute){
                                    $this->processQuestion($value);
                                }                              
                            }
                        }                          
                        
                    }else{
                        return $this->repeat();
                    }
                });
            }                          
        }else{
            if ($question->link !== NULL && $question->link != "" && $question->link != " "){
                $thequestion = Question::create($question->question)
                ->addButton(Button::create($question->button)->value($question->button)->additionalParameters(["link"=>$question->link]));
            }else{
                 $thequestion = Question::create($question->question)
                ->addButton(Button::create($question->button)->value($question->button));
            }           

                $this->ask($thequestion, function ($answer) use ($question){
                    if ($question->link == ""){
                        if ($this->checkIfValid($answer->getText(),$question->requiredAnswers) == "valid"){
                            $this->editMessageDB($answer->getText());   
                            if($question->trueRoute === NULL || $question->trueRoute == ""){
                                $this->getEndingMenu($question);
                            }else{
                                foreach ($this->allQuestions as $key => $value) {
                                    if ($question->trueRoute == $value->id){
                                        $this->processQuestion($value);
                                    } 
                                } 
                            }                           
                        }else{
                            return $this->repeat();
                        }
                    }else{
                        $this->editMessageDB($answer->getText());   
                        if($question->trueRoute === NULL || $question->trueRoute == ""){
                            $this->getEndingMenu($question);
                        }else{
                            foreach ($this->allQuestions as $key => $value) {
                                if ($question->trueRoute == $value->id){
                                    $this->processQuestion($value);
                                } 
                            }  
                        }
                       
                    }
                   
                });
    }
}
    protected function checkIfValid($answer,$original){
        if (strtolower($answer) == strtolower($original)){
            return "valid";
        }
        else{
            return "invalid";
        }
    }
    protected function calculate($calculations)
    {
        $stringCalc = new StringCalc();

        $result = $stringCalc->calculate($calculations);

        return $result;

    }
    protected function readNprocessLogic($logic,$operator){     
        $logic_temp = $this->replaceTheTags($logic);   
        $brokenLogic = explode($operator,$logic_temp);
       $brokenLogic[0] = str_replace(" ","",$brokenLogic[0]);
        $brokenLogic[1] = str_replace(" ","",$brokenLogic[1]);
        
        //is there calculation on the left side?
        if (str_contains($brokenLogic[0],'*') || str_contains($brokenLogic[0],'/') || str_contains($brokenLogic[0],'+') || str_contains($brokenLogic[0],'-')){
           // var_dump($brokenLogic[0]);
            //means got
            $calculated_value1 = $this->calculate($brokenLogic[0]);
            
            if (str_contains($brokenLogic[1],'*') || str_contains($brokenLogic[1],'/') || str_contains($brokenLogic[1],'+') || str_contains($brokenLogic[1],'-')){
                $calculated_value2 = $this->calculate($brokenLogic[1]);
                return $this->doComparison($calculated_value1,$calculated_value2,$operator);
            }
            return $this->doComparison($calculated_value1,$brokenLogic[1],$operator);
        }else{
            return $this->doComparison($brokenLogic[0],$brokenLogic[1],$operator);
        }
    }
    protected function replaceTheTags($logic){
        $logic_temp = $logic;
        //replace all value tags
        foreach ($this->values as $key => $value) {
            $valuestring = "{value" . ($key+1) . "}";
            if (str_contains($logic,$valuestring) === true){
                $logic_temp = str_replace($valuestring,$value,$logic_temp);
            }
        }
        //replace dynamic variables if any
        $dynamic_variables = DB::table("dynamic_variables")->get();
        foreach ($dynamic_variables as $key => $value) {
            if (str_contains($logic_temp,$value->name) === true){
                $logic_temp = str_replace("{" . $value->name . "}",$value->value,$logic_temp);
            }
        }  
        return $logic_temp;
    }
    protected function doComparison($v1,$v2,$operator){
        $v1 = floatval($v1);
        $v2 = floatval($v2);
       
        if ($operator == ">"){
            if ($v1 > $v2){
                return true;
            }
        }else{
            if ($v1 < $v2){
                return false;
            }
        }
    }
    protected function donlplikesearch($statement){
        
        //var_dump(json_decode($this->mainSubCategories));
        $fuse = new \Fuse\Fuse(json_decode($this->mainSubCategories, true),["keys" => ["sub_category_name"]]);
        // var_dump($fuse);
        return $fuse->search($statement);

    }
}