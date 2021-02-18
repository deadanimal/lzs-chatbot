<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BotQuestion extends Model
{

    protected $table = 'bot_questions';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id'
    ];

}
