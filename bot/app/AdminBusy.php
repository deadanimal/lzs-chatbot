<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AdminBusy extends Model
{

    protected $table = 'admin_busy';
    protected $primaryKey= 'userid';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id'
    ];

}
