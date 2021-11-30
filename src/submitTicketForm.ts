export type TicketData = {
    name: { value: string }
    email: { value: string }
    subject: { value: string }
    message: { value: string }
}

function submitTicketForm(ticketData: TicketData): Promise<'success' | 'fail'> {
    const { name, email, subject, message } = ticketData
    return window
        .fetch('https://api.livechatinc.com/v2/tickets/new', {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                group: 0,
                licence_id: 13329102,
                requester: {
                    name: name.value,
                    mail: email.value,
                },
                subject: subject.value,
                offline_message: message.value,
                ticket_message: message.value,
                visitor_id: email.value,
            }),
        })
        .then(async (response) => {
            if (response.ok) {
                return 'success'
            } else {
                return 'fail'
            }
        })
}

export { submitTicketForm }
