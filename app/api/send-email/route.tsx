import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend (process.env.RESEND_API_KEY)

export async function POST() {
    await resend.emails.send({
        // use your own domain email into the from 
        //cant use gmail or any free services 
        from:'',
        to:'',
        subject: '',
        react: <WelcomeTemplate name='Mosh' />
    })

    return NextResponse.json({})
}