"use client"
import React, { useState } from 'react'
import { RedirectUrls } from 'types/general';
import dynamic from 'next/dynamic';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import { newblogPostUrl } from 'data/redirect_pages';
const AddRedirecturl = dynamic(() => import("./AddRedirecturl"))
const ViewRedirecturl = dynamic(() => import("./ViewRedirecturl"))

function MainPage({ Redirecturls }: { Redirecturls: RedirectUrls[] }) {
    const [RedirectUrls, setRedirectUrls] = useState<RedirectUrls | undefined>();
    const [selecteMenu, setselecteMenu] = useState<string>("All RedirectUrls");
    const handler=async()=>{
        // createRedirectUrl
        // let newurls = await newblogPostUrl.map(async(value)=>{

        //   return  await createRedirectUrl({
        //          url:value.url.replace(/^\/+/, ''),
        //         redirectedUrl:value.redirectUrl.replace(/^\/+/, '')
        //     })
        // })

        console.log(newblogPostUrl.length,"createRedirectUrl")
    }
    return (

        <DefaultLayout>
        <button onClick={handler}>button</button>
            {selecteMenu == "All RedirectUrls" ?

                <ViewRedirecturl Redirecturls={Redirecturls} setRedirectUrls={setRedirectUrls} setselecteMenu={setselecteMenu} />
                :
                <AddRedirecturl setRedirectUrls={setRedirectUrls} setselecteMenu={setselecteMenu} RedirectUrls={RedirectUrls} />
            }
        </DefaultLayout>

    )
}

export default MainPage