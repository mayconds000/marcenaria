<?php
class Supplier {

    public function insert($data) {
        $sql = "INSERT INTO supplier (firstName, lastName, cnpj, ie, address, number, neighborhood,
        cep, city, state, phone, celphone, email, date_register, date_update, status )
        values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $stm = DB::prepare($sql);

        try {
            $stm->execute(array(
                $data->firstName,
                $data->lastName,
                $data->cnpj,
                $data->ie,
                $data->address,
                $data->number,
                $data->neighborhood,
                $data->cep,
                $data->city,
                $data->state,
                $data->phone,
                $data->celphone,
                $data->email,
                date("Y/m/d"),
                date("Y/m/d"),
                0
            ));
            $stm->rowCount();
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function update($data) {
        $sql = "UPDATE supplier SET firstName=?, lastName=?, cnpj=?, ie=?, address=?,
        number=?, neighborhood=?, cep=?, city=?, state=?, phone=?, celphone=?,
        email=?, date_update=?
        WHERE id=? ";
        $stm = DB::prepare($sql);

        try{
            $stm->execute(array(
                $data->firstName,
                $data->lastName,
                $data->cnpj,
                $data->ie,
                $data->address,
                $data->number,
                $data->neighborhood,
                $data->cep,
                $data->city,
                $data->state,
                $data->phone,
                $data->celphone,
                $data->email,
                date("Y/m/d"),
                $data->id
            ));


        } catch (PDOException $e) {
            echo $e->getMessage();
        }


    }
    //verificar se vai precisar ja que vou utilizar os filters do angular
    public function fetch($id) {

    }

    public function fetchAll() {
        $sql = "SELECT * FROM supplier";
        $stm = DB::prepare($sql);
        $stm->execute();
        return $stm->fetchAll();

    }

    public static function delete($id) {
        $sql = "DELETE FROM supplier WHERE id=?";
        try{
            $stm = DB::prepare($sql);
            $stm->execute(array($id));
            return $stm->rowCount();
        } catch(PDOException $e) {
            echo "erro ao deletar: " . $e->getMessage();
        }
    }

}
