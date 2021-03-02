<?php

namespace App;

//use App\Events\MessageCreated;
use Illuminate\Database\Eloquent\Model;

class Conversationz extends Model
{   
    //use Notifiable;

    /**
     * The event map for the model.
     *
     * @var array
     */
    // protected $dispatchesEvents = [
    //     'created' => MessageCreated::class,
    // ];

    protected $table = 'conversations';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id'
    ];

}
