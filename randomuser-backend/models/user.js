import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    nombre: { type: String, required: true },
    genero: { type: String, required: true },
    ubicacion: { type: String, required: true },
    correo: { type: String, required: true },
    cumpleanios: { type: String, required: true },
    fotografia: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const { __v, ...user } = this.toObject();
  return user;
};

export const User = model("User", userSchema);
