<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BotSubCategory extends Model
{

    protected $table = 'bot_subcategories';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id'
    ];

}
