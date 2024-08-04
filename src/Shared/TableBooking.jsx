import Swal from 'sweetalert2';
import '../App.css'
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';

const TableBooking = () => {

    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onTouched'
    });
    const onSubmit = data => {
        const { name } = data;
        const { guests } = data;
        const { number } = data;
        const { specialReq } = data;
        reset()
        const bookingReq = {
            hostName: name,
            expectedGuests: guests,
            contact: number,
            specialReq: specialReq,
            status: 'pending'
        };
        axiosPublic.post('/booking', bookingReq)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Booking',
                        text: 'Your request has been registered and upon approval you will receive a confirmation text at the provided number.',
                        icon: 'info',
                        confirmButtonText: 'Ok'
                    })
                }
            })

            .catch(
                error => {
                    console.log(error, errors),
                        Swal.fire({
                            title: 'Error',
                            text: 'Sorry something went wrong',
                            icon: 'error',
                            confirmButtonText: 'Close'
                        })
                }

            )
    }


    return (
        <div>
            <h2 className='text-3xl font-serif text-center my-10'>Table Booking</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='grid grid-cols-2 items-center justify-center mx-auto container gap-10 w-[70%]'>

                <input
                    type="text"
                    className='border-b border-zinc-400 focus:border-black focus:outline-none placeholder:text-zinc-500 placeholder:tracking-wider placeholder:font-mono'
                    placeholder='RESERVATION DATE & TIME'
                    {...register("reservationTime", { required: true })} />

                <input
                    type="number"
                    className='border-b border-zinc-400 focus:border-black focus:outline-none placeholder:text-zinc-500 placeholder:tracking-wider placeholder:font-mono'
                    placeholder='GUEST NUMBER'
                    {...register("guests", { required: true })} />

                <input
                    type="text"
                    className='border-b border-zinc-400 focus:border-black focus:outline-none placeholder:text-zinc-500 placeholder:tracking-wider placeholder:font-mono'
                    placeholder='FULL NAME'
                    {...register("name", { required: true })} />

                <input
                    type="number"
                    className='no-arrows border-b border-zinc-400 focus:border-black focus:outline-none placeholder:text-zinc-500 placeholder:tracking-wider placeholder:font-mono'
                    placeholder='PHONE NUMBER'
                    min={100000000}
                    max={999999999999}
                    {...register("number", { required: true })} />

                <textarea
                    rows='5'
                    className='border-b focus:outline-none border-zinc-400 focus:border-black col-span-2 placeholder:text-zinc-500 placeholder:tracking-wider placeholder:font-mono'
                    placeholder='SPECIAL REQUEST'
                    {...register("specialReq", { required: true })}></textarea>

                <input
                    type="submit"
                    value="SEND"
                    className='px-5 py-3 text-xs mx-auto  bg-gradient-to-r from-orange-400 to-red-600 ...  rounded-2xl col-span-2 w-[15%] text-white' />
            </form>
        </div>
    );
};

export default TableBooking;