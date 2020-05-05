import {withStyles} from '@material-ui/core/styles';
import {compose} from 'recompose';
import {styles} from './styles';
import {graphql} from "@apollo/react-hoc";
import {addMovieMutation, updateMovieMutation} from "./mutation";
import {moviesQuery} from "../MoviesTable/queries";
import {directorsQuery} from "../DirectorsTable/queries";


const withGraphql = compose(graphql(addMovieMutation, {
        props: ({mutate}) => ({
            addMovie: movie => mutate({
                variables: movie,
                refetchQueries: [
                    {
                        query: moviesQuery,
                        variables: {name: ''}
                    },
                    {
                        query: directorsQuery,
                        variables: {name: ''}
                    }
                ],
            }),
        }),
    }),
    graphql(updateMovieMutation, {
        props: ({mutate}) => ({
            updateMovie: movie => mutate({
                variables: movie,
                refetchQueries: [
                    {
                        query: moviesQuery,
                        variables: {name: ''}
                    },
                    {
                        query: directorsQuery,
                        variables: {name: ''}
                    }

                ],
            }),
        }),

    }),
    graphql(directorsQuery, {
        options: ({name = ''}) => ({variables: {name}}),
    }))

export default compose(withStyles(styles), withGraphql);
