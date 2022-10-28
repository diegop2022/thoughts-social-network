const { Schema, model } = require('mongoose')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

const thoughtTextSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
        minLength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        {
            type: String,
            enum: ['happy', 'sad'],
        }
    ]
})

const Thought = model('Thought', thoughtTextSchema);
const Reaction = model('Reaction', reactionSchema);

module.exports = Thought, Reaction;