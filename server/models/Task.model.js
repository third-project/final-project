const {Schema,model} = require("mongoose");

const taskSchema = new Schema(
{
    description:{
        type:String,
        required: true, 
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
} ,
{
    timestamps: true,
  }
)

const Task = model("Task", taskSchema);

module.exports = Task;
