import {deleteMutation} from "./mutation";
import {moviesQuery} from "../MoviesTable/queries";
import {graphql} from "react-apollo";
import {compose} from "recompose";
import {directorsQuery} from "../DirectorsTable/queries";


const withGraphqlDelete = graphql(deleteMutation, {
    props: ({mutate}) => ({
        deleteMovie: id => mutate({
            variables: id,
            refetchQueries: [
                {
                    query: moviesQuery,
                    variables: {name: ''}
                },
                {
                    query: directorsQuery,
                    variables: {name: ''}
                }
            ]
        })
    })
})

export default compose(withGraphqlDelete)