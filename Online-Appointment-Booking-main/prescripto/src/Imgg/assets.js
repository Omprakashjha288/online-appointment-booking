import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import contact_image from './contact_image.png'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import info_icon from './info_icon.svg'
import about_image from './about_image.png'
import profile_pic from './profile_pic.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import logo from './logo.svg'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import arrow_icon from './arrow_icon.svg'
import appointment_img from './appointment_img.png'

export const assets = { 
    appointment_img, 
    arrow_icon, 
    add_icon,
    admin_logo,
    appointment_icon,
    cancel_icon,
    doctor_icon,
    upload_area,
    home_icon,
    patients_icon,
    contact_image,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon,
    dropdown_icon,
    menu_icon,
    cross_icon,
    chats_icon,
    verified_icon,
    info_icon,
    about_image,
    profile_pic, 
    stripe_logo,
    razorpay_logo, 
    header_img,
    group_profiles,
    logo,
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
    doc11,
    doc12,
    doc13,
    doc14,
    doc15,
    Dermatologist,
    Gastroenterologist,
    General_physician,
    Gynecologist,
    Neurologist,
    Pediatricians
}


export const SpecialityData = [
    {
        speciality : 'General physician',
        image : General_physician
    },
    {
        speciality : 'Gynecologist',
        image : Gynecologist
    },
    {
        speciality : 'Dermatologist',
        image : Dermatologist
    },
    {
        speciality : 'Pediatricians',
        image : Pediatricians
    },
    {
        speciality : 'Neurologist',
        image : Neurologist
    },
    {
        speciality : 'Gastroenterologist',
        image : Gastroenterologist
    },
];

export const doctors = [
    {
        _id:'doc1',
        name: 'Dr. Richard James',
        image : doc1,
        speciality : 'General physician',
        degree : 'MBBS',
        experience : '4 Years',
        about : 'Dr James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. ',
        fees : 50,
        address :{
            line1 : '17th cross, Richmond',
            Line2 : 'Circle, Ring Road, London'
        }
    },
    {
        _id:'doc2',
        name:'Dr. Emily Larson',
        image : doc2,
        speciality : 'Gynecologist',
        degree : 'MBBS ',
        experience : '4 Years',
        about : 'Dr James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. ',
        fees : 60,
        address :{
            line1 : '17th cross, Richmond',
            Line2 : 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. James Wilson',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MD Dermatologist',
        experience: '8 Years',
        about: 'Dr. James specializes in cardiovascular health, committed to preventive heart care, early diagnosis, and treatment planning.',
        fees: 80,
        address: {
            line1: '5th Avenue, Downtown',
            line2: 'Main Street, New York'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Sarah Patel',
        image: doc4,
        speciality: 'Dermatologist',
        degree: 'MD Dermatology',
        experience: '5 Years',
        about: 'Dr. Sarah focuses on skin health, offering a comprehensive approach to dermatology with an emphasis on skin cancer prevention and treatment.',
        fees: 70,
        address: {
            line1: '10th Block, Ash Street',
            line2: 'West Side, Chicago'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Daniel Brown',
        image: doc5,
        speciality: 'Gynecologist',
        degree: 'MBBS, Gynecologist',
        experience: '7 Years',
        about: 'Dr. Daniel is dedicated to providing top-quality healthcare to children, with a focus on preventive care and growth monitoring.',
        fees: 65,
        address: {
            line1: '8th Cross, Maple Grove',
            line2: 'Central Park, Toronto'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Lisa Thompson',
        image: doc6,
        speciality: 'Pediatrician',
        degree: 'MD Orthopedics',
        experience: '10 Years',
        about: 'Dr. Lisa is an expert in musculoskeletal health, specializing in surgeries and treatments for joint, bone, and muscle injuries.',
        fees: 90,
        address: {
            line1: '22nd Avenue, Heritage Area',
            line2: 'Queen’s Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Mark Robinson',
        image: doc7,
        speciality: 'Neurologist',
        degree: 'MD Neurology',
        experience: '12 Years',
        about: 'Dr. Mark is focused on neurological health, delivering advanced care and innovative treatments for various neurological conditions.',
        fees: 100,
        address: {
            line1: '9th Street, City Center',
            line2: 'Main Boulevard, Los Angeles'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Karen Lee',
        image: doc8,
        speciality: 'Dermatologist',
        degree: 'MD Dermatologist',
        experience: '6 Years',
        about: 'Dr. Karen is committed to managing hormone-related conditions, focusing on diabetes care, thyroid issues, and metabolic disorders.',
        fees: 75,
        address: {
            line1: '16th Circle, Valley Street',
            line2: 'East Side, Vancouver'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Steven Miller',
        image: doc9,
        speciality: 'Pediatricians',
        degree: 'MD Pediatricians',
        experience: '9 Years',
        about: 'Dr. Steven provides compassionate mental health care, specializing in therapy and medication management for various psychiatric conditions.',
        fees: 85,
        address: {
            line1: 'Park Lane, Sunrise Avenue',
            line2: 'City West, Sydney'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Olivia Martin',
        image: doc10,
        speciality: 'Gastroenterologist',
        degree: 'MD Gastroenterologist',
        experience: '15 Years',
        about: 'Dr. Olivia is dedicated to cancer care, focusing on the latest treatments and patient-centered approaches in oncology.',
        fees: 110,
        address: {
            line1: 'Harbor Drive, Central District',
            line2: 'Ocean Park, Miami'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. David Chen',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MD Gastroenterologist',
        experience: '11 Years',
        about: 'Dr. David specializes in urological health, providing expert care in kidney, bladder, and reproductive health.',
        fees: 95,
        address: {
            line1: 'Broadway, Midtown',
            line2: 'City Center, Seattle'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. David Chen',
        image: doc12,
        speciality: 'General physician',
        degree: 'MD Genral physician',
        experience: '11 Years',
        about: 'Dr. David specializes in urological health, providing expert care in kidney, bladder, and reproductive health.',
        fees: 95,
        address: {
            line1: 'Broadway, Midtown',
            line2: 'City Center, Seattle'
        }
    }
    
];