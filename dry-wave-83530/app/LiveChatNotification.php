<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LiveChatNotification extends Model
{

    protected $table = 'live_chat_notification';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id'
    ];

}
