import '../App.css'

const TableBooking = () => {

    return (
        <div>
            <h2 className='text-3xl font-serif text-center my-10'>Table Booking</h2>
            <form className='grid grid-cols-2 items-center justify-center mx-auto container gap-10 w-[70%]'>

                <input 
                type="text" 
                className='border-b border-zinc-400 focus:border-black focus:outline-none placeholder:text-zinc-500 placeholder:tracking-wider placeholder:font-mono' 
                placeholder='RESERVATION TIME'/>

                <input 
                type="number" 
                className='border-b border-zinc-400 focus:border-black focus:outline-none placeholder:text-zinc-500 placeholder:tracking-wider placeholder:font-mono' 
                placeholder='GUEST NUMBER'/>
                
                <input 
                type="text" 
                className='border-b border-zinc-400 focus:border-black focus:outline-none placeholder:text-zinc-500 placeholder:tracking-wider placeholder:font-mono' 
                placeholder='FULL NAME'/>

                <input 
                type="number" 
                className='no-arrows border-b border-zinc-400 focus:border-black focus:outline-none placeholder:text-zinc-500 placeholder:tracking-wider placeholder:font-mono' 
                placeholder='PHONE NUMBER'/>

                <textarea 
                rows='5' 
                className='border-b focus:outline-none border-zinc-400 focus:border-black col-span-2 placeholder:text-zinc-500 placeholder:tracking-wider placeholder:font-mono' 
                placeholder='SPECIAL REQUEST' ></textarea>
                
                <input 
                type="submit" 
                value="SEND" 
                className='px-5 py-3 text-xs mx-auto bg-[#C40C0C] rounded-2xl col-span-2 w-[15%] text-white'/>
            </form>
        </div>
    );
};

export default TableBooking;