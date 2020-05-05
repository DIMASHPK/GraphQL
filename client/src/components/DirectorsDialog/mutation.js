import {gql} from 'apollo-boost'


export const deleteMutation = gql`
    mutation deleteDirector($id: ID){
        deleteDirector(id: $id){
            id,
            name,
        }
    }

`