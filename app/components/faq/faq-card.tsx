'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { useState } from 'react'

import { Button } from '@/app/components/ui/button';
import { Icons } from '@/app/components/ui/icons';
import { absoluteUrl } from "@/app/utils/utils";

const faqEndpoint = absoluteUrl("/api/faq");


const FaqCard = () => {
    return (
        <p>Loading...</p>);
  }
export default FaqCard