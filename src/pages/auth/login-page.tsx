import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ROUTE_PATHS } from "../../app/router/route-paths";
import { BiShow } from "react-icons/bi";
import { useState } from "react";
import { useLogin } from "../../features/auth/hooks/use-login";

type LoginFormData = {
    email: string;
    password: string;
}

export default function LoginPage() {

    const { mutate, isPending, isError } = useLogin();

    const { register, handleSubmit } = useForm<LoginFormData>(({
        defaultValues: {
            email: '',
            password: ''
        }
    }))

    const navigate = useNavigate();

    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    const handleLogin = (data: LoginFormData) => {

        mutate(data, {
            onSuccess: () => {
                navigate(ROUTE_PATHS.DASHBOARD);
            },
        });

    }

    return (
        <div className="min-h-screen bg-[url('/src/assets/login-bg.png')] bg-cover flex items-center justify-start p-16 ">
            <div className='bg-white p-8 rounded-lg shadow-lg w-120'>
                <h3 className="text-2xl font-semibold pb-2">Welcome Back! 👋</h3>
                <p>Sign in to your account</p>
                <form onSubmit={handleSubmit(handleLogin)} className='mt-8'>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input
                            type='email'
                            className="bg-white w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('email')}
                        />
                    </div>
                    <div className='mb-8 relative'>
                        <label className='block text-gray-700'>Password</label>
                        <input
                            type={isShowPassword ? 'text' : 'password'}
                            className='bg-white w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            {...register('password')}
                        />
                        <button className='absolute right-3 top-8 text-[#4B5563] cursor-pointer hover:text-[#4F46E5]' type='button' onClick={() => setIsShowPassword(!isShowPassword)}>
                            <BiShow className='w-7 h-7' />
                        </button>
                    </div>
                    <div className='flex items-center justify-between mb-8'>
                        <div>
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-[#6366F1] font-semibold">Remember me</label>
                        </div>
                        <div>
                            <a href="#" className="text-blue-500 hover:underline text-sm font-semibold">Forgot password?</a>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-[#4F46E5] text-white text-bold py-2 rounded-lg hover:bg-[#4338CA] transition duration-200 cursor-pointer'
                    >
                        {isPending ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}