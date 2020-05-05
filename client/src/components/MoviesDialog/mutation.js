import {gql} from 'apollo-boost'


export const deleteMutation = gql`
    mutation deleteMovie($id: ID){
        deleteMovie(id: $id){
            id,
            name,
        }
    }

`