<script>

import { Measures } from '../../lib/collections'

export default {

    data () {
        return {
            measures: [],
        }
    },
    
    meteor: {
        $subscribe: {
            'measures': [],
        },

        measures () {
            return Measures.find({}, {
                sort: { date: -1 },
            })
        },
    },
}
</script>