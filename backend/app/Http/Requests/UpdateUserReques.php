<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; 
    }

    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:100'],
            'last_name'  => ['required', 'string', 'max:100'],
            'email'      => ['required', 'email', Rule::unique('users')->ignore($this->user)], // ¡Crucial!
            'phone'      => ['nullable', 'string', 'max:20'],
            'status_id'  => ['required', 'integer', Rule::in([1, 2, 3])], // Valida contra los IDs válidos
        ];
    }
}