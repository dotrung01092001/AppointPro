import { useAuthStore } from "../../app/store/auth-store";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ROUTE_PATHS } from "../../app/router/route-paths";
/* import { BiShow } from "react-icons/bi"; */

type LoginFormData = {
    email: string;
    password: string;
}

export default function LoginPage() {
    const { login } = useAuthStore()

    const { register, handleSubmit } = useForm<LoginFormData>(({
        defaultValues: {
            email: '',
            password: ''
        }
    }))

    const navigate = useNavigate()

    const handleLogin = (data: LoginFormData) => {

        login({
            accessToken: "mocked-access-token",
            user: {
                id: "1",
                fullName: "Trung Cris",
                email: data.email,
                role: "ADMIN",
                avatarUrl: "https://i.pravatar.cc/150?img=1"
            }
        })

        navigate(ROUTE_PATHS.DASHBOARD)
    }

    return (
        <div className="min-h-screen bg-[url('/src/assets/login-bg.png')] bg-cover flex items-center justify-start p-16">
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
                <h3 className="text-2xl font-semibold pb-2">Welcome Back! 👋</h3>
                <p>Sign in to your account</p>
                <form onSubmit={handleSubmit(handleLogin)} className='mt-6'>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input
                            type='email'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            {...register('email')}
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700'>Password</label>
                        <input
                            type='password'
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            {...register('password')}
                        />
                        <button>{/* <BiShow /> */}</button>
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200'
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}