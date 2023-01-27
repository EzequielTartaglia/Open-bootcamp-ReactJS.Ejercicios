import React, { useState } from 'react'


const CustomModal: React.FunctionComponent<{ customMessage: string, onConfirm: () => void }> = ({ customMessage,onConfirm }) => {


    //Propieties 
    //customMessage = to custom the message(customMessage = 'Are you sure you wish to disconnect this game from your Quarters account?')
    //onConfirm = to custom the function when you click in confirm, then close.

    //showModal = to show the modal in the screen or dissapear (dinamic)
    const [showModal, setShowModal] = useState(true);

    
    //return with animated transition when close
    //opacity: 1 → Active
    //opacity: 0,transition: 'opacity 0.5s ease-in-out' → Close
    return (

        showModal
            ? (<><div 
                style={{
                position: 'fixed',
                zIndex: '9999',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                maxWidth: '660px',
                height: 'auto',
                backgroundColor: 'grey',
                borderRadius: '6px',
                padding: '1rem',
                boxSizing: 'border-box',
                opacity: 1
                
                
            }}>



                <button onClick={() => setShowModal(false)}
                    style={{
                        position: 'absolute',
                        right: '5px',
                        top: '2.5px',
                        color: 'black',
                        cursor: 'pointer',
                        fontSize: '24px',
                        background: 'grey',
                        border:'none'
                    }}> X </button>

                <div style={{
                    textAlign: 'center'
                }}>

                    <p style={{
                        marginTop: '15px',
                        marginBottom: '30px',
                        color: 'black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        minWidth: '60%',
                        padding: '10px 1.5rem 0 1.5rem',
                        height: '40px'
                    }}>{customMessage}</p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        margin: '30px 0'

                    }}>
                        <button type="button"
                            style={{
                                minWidth: '70%',
                                padding: '1.3%',
                                cursor: 'pointer',
                                marginBottom: '3px',
                            }}
                            className={`border-primary border-2 text-center h-[44px] px-8 rounded-[5px] disabled:border-disabled w-max bg-primary text-bgPrimary disabled:bg-disabled block my-2`}

                            /* Do the function and then close */
                            onClick={() => {onConfirm();setShowModal(false);}}
                            >Confirm</button>

                        <button type="button"
                            style={{
                                minWidth: '70%',
                                padding: '1.2%',
                                cursor: 'pointer'
                            }}
                            className=
                            {`border-primary border-2 text-center h-[44px] px-8 rounded-[5px] disabled:border-disabled w-max bg-primary text-bgPrimary disabled:bg-disabled block my-2`}
                            onClick={() => setShowModal(false)}
                            >Cancel</button>

                    </div>

                </div>

            </div></>)

            : (<><div 
                style={{
                position: 'fixed',
                zIndex: '9999',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                maxWidth: '660px',
                height: 'auto',
                backgroundColor: 'grey',
                borderRadius: '6px',
                padding: '1rem',
                boxSizing: 'border-box',
                opacity: 0,
                transition: 'opacity 0.2s ease-in-out'
                
            }}>



                <button onClick={() => setShowModal(false)}
                    style={{
                        position: 'absolute',
                        right: '5px',
                        top: '2.5px',
                        color: 'black',
                        cursor: 'pointer',
                        fontSize: '24px',
                        background: 'grey',
                        border:'none'
                    }}> X </button>

                <div style={{
                    textAlign: 'center'
                }}>

                    <p style={{
                        marginTop: '15px',
                        marginBottom: '30px',
                        color: 'black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.4rem',
                        minWidth: '60%',
                        padding: '10px 1.5rem 0 1.5rem',
                        height: '40px'
                    }}>{customMessage}</p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        margin: '30px 0'

                    }}>
                        <button type="button"
                            style={{
                                minWidth: '70%',
                                padding: '1.3%',
                                cursor: 'pointer',
                                marginBottom: '3px',


                            }}
                            className={`border-primary border-2 text-center h-[44px] px-8 rounded-[5px] disabled:border-disabled w-max bg-primary text-bgPrimary disabled:bg-disabled block my-2`}>Confirm</button>

                        <button type="button"
                            style={{
                                minWidth: '70%',
                                padding: '1.2%',
                                cursor: 'pointer'
                            }}
                            className=
                            {`border-primary border-2 text-center h-[44px] px-8 rounded-[5px] disabled:border-disabled w-max bg-primary text-bgPrimary disabled:bg-disabled block my-2`}
                            onClick={() => setShowModal(false)}>Cancel</button>

                    </div>

                </div>

            </div></>)


    )
}

export default CustomModal