import {deleteMutation} from "./mutation";
import {graphql} from "react-apollo";
import {compose} from "recompose";
import {directorsQuery} from "../DirectorsTable/queries";




const withGraphqlDelete = graphql(deleteMutation, {
    props: ({mutate})=>({
        deleteDirector: id => mutate({
            variables: id,
            refetchQueries: [{
                query: directorsQuery,
                variables: {name:''}
            }]
        })
    })
})

export default compose(withGraphqlDelete)