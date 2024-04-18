import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Tailwind, Link, Preview } from '@react-email/components'

const WelcomeTemplate = ({ name }: {name: string}) => {
  return (
    <Html> 
        <Preview> Welcome!! </Preview> 

            {/* Using Tailwind to style */}
            <Tailwind> 
                <Body className=' bg-slate-600 '>
                    <Container>
                        <Text style={heading}> Hello {name}</Text>
                        <Link href='https://www.google.com' > www.google.com </Link>
                    </Container>
                </Body>
            </Tailwind>
    </Html>
  )
}

//Styling Email with CSSProperties
const body: CSSProperties ={ 
    background: '#fff1'
}

const heading: CSSProperties = {
    fontSize: "32px"
}

export default WelcomeTemplate
