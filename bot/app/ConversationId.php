<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConversationId extends Model
{

    protected $table = 'conversation_id';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id'
    ];

}
