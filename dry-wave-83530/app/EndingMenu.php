<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EndingMenu extends Model
{

    protected $table = 'end_selections';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id'
    ];

}
