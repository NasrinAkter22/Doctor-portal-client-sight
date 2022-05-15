import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';



const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1'>
                <img className='mt-[-100px]' src={doctor} alt="" />


            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bolt'>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an Appoinment Today</h2>
                <p className='text-white'>The new service was designed as a more comprehensive first port of call to help patients to book family doctor appointments or to call for an ambulance.
                    The new service was designed as a more comprehensive first port of call to help patients to book family doctor appointments or to call for an ambulance.
                </p>
                <PrimaryButton>Appoinet Here</PrimaryButton>
            </div>

        </section>
    );
};

export default MakeAppoinment;