import React, { useEffect, useState } from "react";
import { addUserFavorite, getUsers } from "./api/randomUsers";
import { formatDate } from "./utils/formatters";
import { toast } from "sonner";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [counterPagination, setCounterPagination] = useState(1);

  const getUsersApi = async () => {
    const users = await getUsers();
    setUsers(users);
    console.log(users);
  };

  const addNewFavoriteUser = async( user ) => {
    const result = await addUserFavorite(user)
    console.log(result)
    if(result.success){
      toast.success(result.msg)
    }
  }

  useEffect(() => {
    if (counterPagination < 1) {
      setCounterPagination(1);
    } else {
      getUsersApi();
    }
  }, [counterPagination]);

  return (
    <div className=" bg-neutral-100 ">
      {/*  CONTENEDOR DEL CONTENIDO */}
      <div className=" container mx-auto  min-h-screen">
        {/*  TITULO */}
        <h1 className=" text-3xl font-bold underline text-center pt-10 ">
          Randoms Users
        </h1>
        {/*  MOSTRAMOS LA LISTA DE LOS USUARIOS SELECCIONADOS */}
        <div className="grid md:grid-cols-2  gap-4 p-8  ">
          {users.map((user, i) => (
            // CREAMOS EL CARD

            <div className=" bg-white shadow-lg rounded-lg p-3 flex  gap-2  ">
              <div className=" flex gap-1 flex-col">
                <button onClick={() => addNewFavoriteUser(user)} className=" bg-green-400 rounded-lg  text-white text-sm font-thin cursor-pointer"> add </button>
                <img
                  key={i}
                  src={user.picture.large}
                  alt={user.name.first}
                  className="w-15 h-15 rounded-full "
                />
              </div>

              <div className="  w-full py-1 px-2">
                <div className="flex justify-between">
                  <h4 className="text-xs font-bold "> {user.name.first} </h4>
                  <h4 className="text-xs">
                    {" "}
                    Gender :{" "}
                    <span className="bg-amber-300 p-1 rounded-lg  text-neutral-500">
                      {user.gender}{" "}
                    </span>{" "}
                  </h4>
                </div>
                <div className=" flex flex-col  mt-1 space-y-1">
                  <p className=" text-xs ">
                    {" "}
                    Country : {user.location.country}{" "}
                  </p>
                  <p className=" text-xs ">
                    {" "}
                    Birth Date : {formatDate(user.dob.date)}{" "}
                  </p>
                  <p className=" text-xs "> Email : {user.email} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* BOTONES DE PAGINACION */}
        <div className=" flex justify-around items-center pb-10  gap-4 w-full ">
          <button
            className=" bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 "
            onClick={() => setCounterPagination(counterPagination - 1)}
          >
            {" "}
            Previous{" "}
          </button>
          <p className=" font-black "> page {counterPagination} </p>
          <button
            className=" bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 "
            onClick={() => setCounterPagination(counterPagination + 1)}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
