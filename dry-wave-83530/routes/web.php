<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/chatframe', function () {
    return view('chatframe');
});

//jwt
Route::group(['middleware' => 'api','prefix' => 'api'], function(){
    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::post('logout', 'AuthenticateController@logout');
    Route::post('refresh', 'AuthenticateController@refresh');
    Route::post('me', 'AuthenticateController@me');
    Route::post('register', 'RegisterController@create');
    Route::get('getUsers', 'AuthenticateController@getUsers');
    Route::post('deleteUser', 'AuthenticateController@deleteUser');    
    Route::post('disableUser', 'AuthenticateController@disableUser');    
    Route::post('changePassword', 'AuthenticateController@changePassword');    
    Route::post('updateUser', 'AuthenticateController@updateUser');    
    Route::post('sendResetLink', 'AuthenticateController@sendResetLink');    
    Route::post('changePassNow', 'AuthenticateController@changePassNow');    
    //Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    //Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::get('livechat/getagentmsg', 'LiveChatController@getagentmsg');
    Route::get('index', 'AuthenticateController@index');
    Route::get('botcategory/index', 'BotCategoryController@index');
    Route::post('botcategory/createCategory', 'BotCategoryController@createCategory');
    Route::post('botcategory/deleteBotCategory', 'BotCategoryController@deleteBotCategory');    
    Route::post('botcategory/updateBotCategory', 'BotCategoryController@updateBotCategory');    
    Route::post('botcategory/addSubCategory', 'BotCategoryController@addSubCategory');    
    Route::get('dynamicvariable/index', 'DynamicVariableController@index');
    Route::post('dynamicvariable/create', 'DynamicVariableController@create');
    Route::post('dynamicvariable/delete', 'DynamicVariableController@delete');    
    Route::post('dynamicvariable/update', 'DynamicVariableController@update');    
    Route::get('botSubcategory/index', 'BotSubcategoryController@index');
    Route::post('botSubcategory/addSubCategory', 'BotSubcategoryController@addSubCategory');
    Route::post('botSubcategory/delete', 'BotSubcategoryController@delete');    
    Route::post('botSubcategory/update', 'BotSubcategoryController@update');    
    Route::post('botSubcategory/deleteMain', 'BotSubcategoryController@deleteMain');    
    Route::post('botSubcategory/editMain', 'BotSubcategoryController@editMain');
    Route::post('botSubcategory/addQ','BotSubcategoryController@addQ');    
    Route::post('botSubcategory/deleteQ','BotSubcategoryController@deleteQ');    
    Route::post('botSubcategory/editQ','BotSubcategoryController@editQ');    
    Route::post('livechat/toggle','LiveChatController@toggle');
    Route::get('livechat/checkToggle','LiveChatController@checkToggle');
    Route::post('livechat/toggleLang','LiveChatController@toggleLang');
    Route::get('livechat/checkToggleLang','LiveChatController@checkToggleLang');
    Route::get('livechat/index', 'LiveChatController@index');
    Route::post('livechat/accept', 'LiveChatController@acceptRequest');
    Route::get('livechat/clientMessage', 'LiveChatController@clientMessage');
    Route::post('livechat/agentMsg', 'LiveChatController@agentMsg');
    Route::post('livechat/sendFeedback', 'LiveChatController@sendFeedback');
    Route::post('livechat/routeToSuperAdmin', 'LiveChatController@routeToSuperAdmin');
    Route::post('livechat/dltAndNotifyClient', 'LiveChatController@dltAndNotifyClient');
    Route::post('giveReport', 'ReportController@index');
   
});
//end of jwt
Route::get('/login',function (Request $request) {
    // ...
});
Route::get('/client', 'ClientChatController@index');
Route::get('/getclientmsg', 'ClientChatController@getclientmsg');
Route::post('/sendmsg', 'ClientChatController@sendmsg');
Route::post('/giveFeedback', 'ClientChatController@giveFeedback');
Route::match(['get', 'post'], '/botman', 'BotManController@handle');

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
