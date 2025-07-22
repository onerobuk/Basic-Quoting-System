import {Dialog} from "@base-ui-components/react";
import * as React from 'react';

interface popupProps{
    buttonName:string,
    modalTitle:string
    modalContent:string
}

const Popup = ({buttonName,modalTitle,modalContent}:popupProps) =>{

    return(
        <Dialog.Root>
            <Dialog.Trigger className='text-blue-600 underline pr-55'>
                {buttonName}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Backdrop className="fixed inset-0 bg-black opacity-20 transition-all duration-150 dark:opacity-70" />
                <Dialog.Popup  className="fixed top-1/2 left-1/2 -mt-8 w-fit -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 p-6 text-gray-900  outline-1 transition-all duration-150">
                    <Dialog.Title className='font-bold text-black text-xl'>
                        {modalTitle}
                    </Dialog.Title>
                    <Dialog.Description className='py-2'>
                        {modalContent}
                    </Dialog.Description>
                    <Dialog.Close className="border-2 border-black px-2 pb-1 rounded-md hover:bg-black hover:text-white">
                        Close
                    </Dialog.Close>
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
export default Popup;