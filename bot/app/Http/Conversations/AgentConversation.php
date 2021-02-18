<?php

namespace App\Http\Conversations;

use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\BotMan\Messages\Outgoing\Question;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;
use Botman\driverweb\WebDriver;

class AgentConversation extends Conversation
{
    
    public function run()
    {

        $this->ask('Sila tunggu untuk ejen kami respon....', function ($answer){
            $this->say("ppp");
        });
        $approved = 0;
        while ($approved != 1) {
            $c = ConversationId::where("clientid",$this->userId)->where("receipent","client")->first();
            if ($c){
                $approved = 1;//return $c;
            }else{
                //return false;
            }
        }
    }
}