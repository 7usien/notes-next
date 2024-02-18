'use server'


export async function addNoteAction({ formData: FormData } ) {
 console.log('add new snippet from server');

 const note = formData.get('note');
 console.log(note)


}