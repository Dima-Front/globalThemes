import React from 'react';
import BrandButton from "../UI/button/BrandButton";
import BrandInput from "../UI/input/BrandInput";

const Login = () => {
    return (
        <div>
            <div><span> Войти </span> </div>
            <hr/>
            <div className='input_group'>
                <BrandInput  color='primary'/>
                <BrandInput color='primary'/>
                <BrandButton  color='primary'> Войти </BrandButton>
            </div>
            <hr/>
            <div>
                <span> ИЛИ ВОЙТИ С ПОМОЩЬЮ </span>
                <div>
                    <BrandButton color='primary'> VK </BrandButton>
                    <BrandButton  color='primary'> OK </BrandButton>
                </div>
            </div>
            <div>
                <span> Еще нет аккаунта? </span>
                <span> Регистрация здесь </span>
            </div>
        </div>
    );
};

export default Login;