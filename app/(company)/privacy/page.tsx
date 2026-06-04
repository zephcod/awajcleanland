import ScrollLinkBlank from '@/app/components/ui/scroll_link_blank'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Privacy Policy | Awaj ET',
  description: 'Brief summary of key privacy policies about Awaj ET, the agency, and related platforms',
}

async function Privacy () {
  
  return (
    <div className='max-w-5xl m-auto mt-12 text-muted-foreground'>
      <h1 className=' text-4xl font-bold'>PRIVACY POLICY</h1>
      <p className='font-bold mt-3'>Last updated December 05, 2023</p>
      <br />
      <p>This privacy notice for Awaj ET | ACE Digital Advert PLC {'("we," "us," or "our")'}, 
      describes how and why we might collect, store, use, and/or share {'("process")'} 
      your information when you use our services {'("Services")'}, such as when you:</p>
      <br />
      <div className='ml-6'>
        <p>•	Visit our website at{' '}
          <Link href="https://www.awajai.com" className='underline text-blue-700'>https://www.awajai.com</Link>
        , or any website of ours that links to this privacy notice.</p>
        <p>•	Engage with us in other related ways, including any sales, marketing, or events.</p>
      </div>
      <br />
      <p>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. 
        If you do not agree with our policies and practices, please do not use our Services. 
        If you still have any questions or concerns, please contact us at admin@awajai.com.</p>
        <br /><br />
      <h2 className='text-3xl font-bold'>SUMMARY OF KEY POINTS</h2>
      <br />
      <p>This summary provides key points from our privacy notice, but you can find out more details about any of 
        these topics by clicking the link following each key point or by using our{' '}
        <Link href="#toc" className='underline text-blue-700'>table of content</Link>
        {' '}below to find the section you are looking for.</p><br />
      <div className='mx-16'>
      <p>What personal information do we process? When you visit,
        use, or navigate our Services, we may process personal information depending on
        how you interact with us and the Services, the choices you make, and the
        products and features you use. Learn more about personal information you
        disclose to us.</p><br />
      <p >Do we process any sensitive personal information? We do not
      process sensitive personal information.</p><br />

      <p>Do we receive any information from third parties? We do not
      receive any information from third parties.</p><br />

      <p>How do we process your information? We process your
      information to provide, improve, and administer our Services, communicate with
      you, for security and fraud prevention, and to comply with law. We may also
      process your information for other purposes with your consent. We process your
      information only when we have a valid legal reason to do so. Learn more about
      how we process your information.</p><br />

      <p>In what situations and with which types of parties do we
      share personal information? We may share information in specific situations and
      with specific categories of third parties. Learn more about when and with whom
      we share your personal information.</p><br />

      <p>How do we keep your information safe? We have organizational
      and technical processes and procedures in place to protect your personal
      information. However, no electronic transmission over the internet or
      information storage technology can be guaranteed to be 100% secure, so we
      cannot promise or guarantee that hackers, cybercriminals, or other unauthorized
      third parties will not be able to defeat our security and improperly collect,
      access, steal, or modify your information. Learn more about how we keep your
      information safe.</p><br />

      <p>What are your rights? Depending on where you are located
      geographically, the applicable privacy law may mean you have certain rights
      regarding your personal information. Learn more about your privacy rights.</p><br />

      <p>How do you exercise your rights? The easiest way to exercise
      your rights is by visiting https://www.awajai.com/help_center, or by contacting
      us. We will consider and act upon any request in accordance with applicable
      data protection laws.</p><br />

      <p>Want to learn more about what we do with any information we
      collect? Review the privacy notice in full.</p><br />
    </div>
    <br />
    <h2 className='text-3xl font-bold'>TABLE OF CONTENTS</h2>
    <br />
    <p>1. WHAT INFORMATION DO WE COLLECT?</p>

    <p>2. HOW DO WE PROCESS YOUR INFORMATION?</p>

    <p>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p>

    <p>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>

    <p>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</p>

    <p>6. HOW LONG DO WE KEEP YOUR INFORMATION?</p>

    <p>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>

    <p>8. DO WE COLLECT INFORMATION FROM MINORS?</p>

    <p>9. WHAT ARE YOUR PRIVACY RIGHTS?</p>

    <p>10. CONTROLS FOR DO-NOT-TRACK FEATURES</p>

    <p>11. DO WE MAKE UPDATES TO THIS NOTICE?</p>

    <p>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>

    <p>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p>
    <br /><br />

    <h3 className='text-2xl font-bold'>1. WHAT INFORMATION DO WE COLLECT?</h3>
    <br />
    <h4 className='text-xl font-bold'>Personal information you disclose to us.</h4><br />

    <em>In Short: We collect personal information that you provide
    to us.</em>
    <br /> <br />
    <p>We collect personal information that you voluntarily provide
    to us when you register on the Services, express an interest in obtaining
    information about us or our products and Services, when you participate in
    activities on the Services, or otherwise when you contact us.</p><br />

    <p> <span className='font-bold'>Personal Information Provided by You. {' '}</span>The personal
    information that we collect depends on the context of your interactions with us
    and the Services, the choices you make, and the products and features you use.
    The personal information we collect may include the following:</p>
      <div className='ml-6'>
        <p>•	names</p>
        <p>•	phone numbers</p>
        <p>•	email addresses</p>
        <p>•	contact preferences</p>
      </div><br />
      <p> <span className='font-bold'>Sensitive Information:{' '}</span>We do not process sensitive information.</p><br />
      <p> <span className='font-bold'>Payment Data:{' '}</span>We may collect data necessary to process your payment 
      if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. 
      All payment data is stored by Chapa. You may find their privacy notice links here: 
      <Link href="https://chapa.co/privacy" className='underline text-blue-700'>https://chapa.co/privacy</Link></p> <br />
      <p> <span className='font-bold'>Social Media Login Data:{' '}</span>We may provide you with the option to register with us 
      using your existing social media account details, like your Facebook, Twitter, or other social media account. 
      If you choose to register in this way, we will collect the information described in the section called {' '}  
      <Link href="#" className='underline text-blue-700'>&quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS?&quot;</Link> below.</p> <br />
      <p>All personal information that you provide to us must be true, complete, and accurate, 
        and you must notify us of any changes to such personal information.</p>
      <br />
      <h4 className='text-xl font-bold'>Information automatically collected</h4><br />
      <em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — 
        is collected automatically when you visit our Services.</em>
      <br /><br />
      <p>We automatically collect certain information when you visit, use, or navigate the Services. 
        This information does not reveal your specific identity {'(like your name or contact information)'} 
        but may include device and usage information, such as your IP address, browser and device characteristics, 
        operating system, language preferences, referring URLs, device name, country, location, 
        information about how and when you use our Services, and other technical information. 
        This information is primarily needed to maintain the security and operation of our Services, 
        and for our internal analytics and reporting purposes.</p><br />
      <p>Like many businesses, we also collect information through cookies and similar technologies.</p><br />
      <p>The information we collect includes:</p><br />
      <div className='ml-8'>
        <p>•	Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information
           our servers automatically collect when you access or use our Services and which we record in log files. 
           Depending on how you interact with us, this log data may include your IP address, device information, 
           browser type, and settings and information about your activity in the Services 
           {'(such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use)'}, 
           device event information {'(such as system activity, error reports (sometimes called "crash dumps"), and hardware settings)'}.</p><br />
        <p>•	Device Data. We collect device data such as information about your computer, phone, tablet, 
          or other device you use to access the Services. Depending on the device used, this device data may include information 
          such as your IP address {'(or proxy server)'}, device and application identification numbers, location, browser type, 
          hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</p><br />
        <p>•	Location Data. We collect location data such as information about your device&apos;s location, 
          which can be either precise or imprecise. How much information we collect depends on the type and settings of 
          the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation 
          data that tells us your current location {'(based on your IP address)'}. You can opt out of allowing us to collect 
          this information either by refusing access to the information or by disabling your Location setting on your device. 
          However, if you choose to opt out, you may not be able to use certain aspects of the Services.</p><br />
      </div><br /><br />

      <h3 className='text-2xl font-bold'>2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
      <br />
      <em>In Short: We process your information to provide, improve, and administer our Services, 
        communicate with you, for security and fraud prevention, and to comply with law. 
        We may also process your information for other purposes with your consent. </em>
      <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p><br />
      <div className='ml-8'>
        <p>•	To facilitate account creation and authentication and otherwise manage user accounts. 
          We may process your information so you can create and log in to your account, 
          as well as keep your account in working order.</p><br />
        <p>•	To deliver and facilitate delivery of services to the user. 
          We may process your information to provide you with the requested service.</p><br />
        <p>•	To fulfill and manage your orders. We may process your information to fulfill and manage your orders, 
          payments, returns, and exchanges made through the Services.</p><br />
        <p>•	To evaluate and improve our Services, products, marketing, and your experience. 
          We may process your information when we believe it is necessary to identify usage trends, 
          determine the effectiveness of our promotional campaigns, and to evaluate and improve 
          our Services, products, marketing, and your experience.</p><br />
        <p>•	To identify usage trends. We may process information about how you use our 
          Services to better understand how they are being used so we can improve them.</p><br />
        <p>•	To comply with our legal obligations. We may process your information to comply with our 
          legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</p><br />
      </div><br /><br />

      <h3 className='text-2xl font-bold'>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
      <br />
      <em>In Short: We may share information in specific situations described in this section and/or
         with the following categories of third parties.</em>
      <br /><br />
      <p> <span className='font-bold'>Vendors, Consultants, and Other Third-Party Service Providers:{' '}</span>
      We may share your data with third-party vendors, service providers, contractors, or agents {'("third parties")'} 
      who perform services for us or on our behalf and require access to such information to do that work. 
      The categories of third parties we may share personal information with are as follows:</p> <br />
      <div className='ml-8'>
        <p>•	Payment Processors</p><br />
      </div>
      <p>We also may need to share your personal information in the following situations:</p><br />
      <div className='ml-8'>
        <p> <span className='font-bold'>•	Business Transfers:{' '}</span>
        We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, 
        financing, or acquisition of all or a portion of our business to another company.</p> <br />
      </div><br /><br />

      <h3 className='text-2xl font-bold'>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
      <br />
      <em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em>
      <br /><br />
      <p>We may use cookies and similar tracking technologies {'(like web beacons and pixels)'} to access or store information. 
        Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
        <br /><br />

      <h3 className='text-2xl font-bold'>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h3>
      <br />
      <em>In Short: If you choose to register or log in to our Services using a social media account, 
        we may have access to certain information about you.</em>
      <br /><br />
      <p>Our Services offer you the ability to register and log in using your third-party social media account details 
        {'(like your Facebook or Twitter logins)'}. Where you choose to do this, we will receive certain profile information 
        about you from your social media provider. The profile information we receive may vary depending on the 
        social media provider concerned, but will often include your name, email address, friends list, and profile picture, 
        as well as other information you choose to make public on such a social media platform. </p><br />
      <p>We will use the information we receive only for the purposes that are described in this privacy notice or 
        that are otherwise made clear to you on the relevant Services. Please note that we do not control, 
        and are not responsible for, other uses of your personal information by your third-party social media provider. 
        We recommend that you review their privacy notice to understand how they collect, use, and share your 
        personal information, and how you can set your privacy preferences on their sites and apps.</p>
        <br /><br />

      <h3 className='text-2xl font-bold'>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
      <br />
      <em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined 
        in this privacy notice unless otherwise required by law.</em>
      <br /><br />
      <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, 
        unless a longer retention period is required or permitted by law {'(such as tax, accounting, or other legal requirements)'}. 
        No purpose in this notice will require us keeping your personal information for longer than the period of time 
        in which users have an account with us.</p><br />
      <p>When we have no ongoing legitimate business need to process your personal information, 
        we will either delete or anonymize such information, or, if this is not possible 
        {'(for example, because your personal information has been stored in backup archives)'}, 
        then we will securely store your personal information and isolate it 
        from any further processing until deletion is possible.</p>
        <br /><br />

      <h3 className='text-2xl font-bold'>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
      <br />
      <em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em>
      <br /><br />
      <p>We have implemented appropriate and reasonable technical and organizational security measures designed 
        to protect the security of any personal information we process. However, despite our safeguards and 
        efforts to secure your information, no electronic transmission over the Internet or information 
        storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that 
        hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security 
        and improperly collect, access, steal, or modify your information. Although we will do our best to 
        protect your personal information, transmission of personal information to and from our Services is at your own risk. 
        You should only access the Services within a secure environment.</p>
        <br /><br />

      <h3 className='text-2xl font-bold'>8. DO WE COLLECT INFORMATION FROM MINORS?</h3>
      <br />
      <em>In Short: We do not knowingly collect data from or market to children under 18years of age.</em>
      <br /><br />
      <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, 
        you represent that you are at least 18 or that you are the parent or guardian of such a minor and 
        consent to such minor dependent&apos;s use of the Services. If we learn that personal information from 
        users less than 18 years of age has been collected, we will deactivate the account and take reasonable 
        measures to promptly delete such data from our records. If you become aware of any data we may have 
        collected from children under age 18, please contact us at admin@awajai.com.</p>
        <br /><br />

      <h3 className='text-2xl font-bold'>9. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
      <br />
      <em>In Short: You may review, change, or terminate your account at any time.</em>
      <br /><br />
      <p> <span className='font-bold'>Withdrawing your consent:{' '}</span>If we are relying on your consent to 
      process your personal information, which may be express and/or implied consent depending on the applicable law, 
      you have the right to withdraw your consent at any time. You can withdraw your consent at any time 
      by contacting us by using the contact details provided in the section {' '}  
      <Link href="#" className='underline text-blue-700'>&quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;</Link> below.</p> <br />

      <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, 
        when applicable law allows, will it affect the processing of your personal information conducted in reliance 
        on lawful processing grounds other than consent.</p><br />

      <h4 className='text-xl font-bold'>Account Information</h4><br />
      <p>If you would at any time like to review or change the information in your account or
          terminate your account, you can:</p><br />

      <div className='ml-8'>
        <p>•	Log in to your account settings and update your user account.</p>
      </div><br />
      <p>Upon your request to terminate your account, we will deactivate or delete your account and 
        information from our active databases. However, we may retain some information in our files 
        to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal
         terms and/or comply with applicable legal requirements.</p><br />
      <p> <span className='font-bold'>Cookies and similar technologies: {' '}</span>Most Web browsers are set to accept cookies by default. 
      If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. 
      If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</p> <br />
      <p>If you have questions or comments about your privacy rights, you may email us at admin@awajai.com.</p>
      <br /><br />

      <h3 className='text-2xl font-bold'>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
      <br />
      <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track {'("DNT")'} 
        feature or setting you can activate to signal your privacy preference not to have data about your online 
        browsing activities monitored and collected. At this stage no uniform technology standard for recognizing 
        and implementing DNT signals has been finalized. As such, we do not currently respond to DNT 
        browser signals or any other mechanism that automatically communicates your choice not to be tracked online. 
        If a standard for online tracking is adopted that we must follow in the future, 
        we will inform you about that practice in a revised version of this privacy notice.</p>
        <br /><br />

      <h3 className='text-2xl font-bold'>11. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
      <br />
      <em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
      <br /><br />
      <p>We may update this privacy notice from time to time. The updated version will be indicated by an 
        updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. 
        If we make material changes to this privacy notice, we may notify you either by prominently 
        posting a notice of such changes or by directly sending you a notification. We encourage you 
        to review this privacy notice frequently to be informed of how we are protecting your information.</p>
        <br /><br />

      <h3 className='text-2xl font-bold'>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
      <br />
      <p>If you have questions or comments about this notice, you may email us at admin@awajai.com or contact us by post at:</p><br />
      <div className='ml-8'>
        <p>ACE Digital Advert PLC</p>
        <p>Djibouti St, Yeab Building, 802B.</p>
        <p>Addis Abeba, Yeka Sub-City, P.O.BOX 200014</p>
        <p>Ethiopia</p>
      </div>
      <br /><br />

      <h3 className='text-2xl font-bold'>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
      <br />
      <p>You have the right to request access to the personal information we collect from you, change that information, 
        or delete it. To request to review, update, or delete your personal information, please visit:{' '} 
        <Link href="https://www.awajai.com/help_center" className='underline text-blue-700'>https://www.awajai.com/help_center.</Link>
        </p>
      <br /><br /><br />
    </div>
  )
}

export default Privacy