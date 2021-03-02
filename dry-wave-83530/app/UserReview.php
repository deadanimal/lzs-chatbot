<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserReview extends Model
{

    protected $table = 'user_review';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id'
    ];

}
