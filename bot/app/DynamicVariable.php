<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DynamicVariable extends Model
{

    protected $table = 'dynamic_variables';    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id'
    ];

}
