<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BotCategory extends Model
{

    protected $table = 'bot_category';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id'
    ];

}
