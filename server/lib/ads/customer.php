<?php
class Customer {

    public function insert($data) {
        $sql = "INSERT INTO customer (firstName, lastName, address, number, neighborhood,
        cep, city, state, phone, celphone, email, person_type, date_register, date_update,
        status ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $stm = DB::prepare($sql);


        try {
            DB::beginTransaction();
            $stm->execute(array(
                $data->firstName,
                $data->lastName,
                $data->address,
                $data->number,
                $data->neighborhood,
                $data->cep,
                $data->city,
                $data->state,
                $data->phone,
                $data->celphone,
                $data->email,
                $data->person_type,
                date("Y/m/d"),
                date("Y/m/d"),
                0
            ));

            $lastId = DB::lastInsertId();
            if($data->person_type === 0) {
                $sql = "INSERT INTO fisic_person (id_customer, cpf, rg) values (?,?,?)";
                $data->cpf_cnpj = $data->cpf;
                $data->rg_ie = $data->rg;
            } else {
                $sql = "INSERT INTO legal_person (id_customer, cnpj, ie) values (?,?,?)";
                $data->cpf_cnpj = $data->cnpj;
                $data->rg_ie = $data->ie;
            }
            $stm = DB::prepare($sql);
            $stm->execute(array(
                $lastId,
                $data->cpf_cnpj,
                $data->rg_ie
            ));

            DB::commit();

        } catch (PDOException $e) {
            DB::rollBack();
            echo $e->getMessage();
        }
    }

    public function update($data) {
        $sql = "UPDATE customer SET firstName=?, lastName=?, address=?,
        number=?, neighborhood=?, cep=?, city=?, state=?, phone=?, celphone=?,
        email=?, person_type=?, date_update=?, status=?
        WHERE id=? ";
        $stm = DB::prepare($sql);


        try{
            DB::beginTransaction();
            $stm->execute(array(
                $data->firstName,
                $data->lastName,
                $data->address,
                $data->number,
                $data->neighborhood,
                $data->cep,
                $data->city,
                $data->state,
                $data->phone,
                $data->celphone,
                $data->email,
                $data->person_type,
                date("Y/m/d"),
                0,
                $data->id
            ));

            if($data->person_type == 0) {
                $sql = "SELECT * FROM fisic_person WHERE id_customer=?";
                $stm = DB::prepare($sql);
                $stm->execute(array($data->id));
                $result = $stm->fetch();
                if($stm->rowCount() > 0) {
                    $sql = "UPDATE fisic_person SET cpf=?, rg=? WHERE id_customer=?";
                    $up = 1;
                } else {
                    $up = 0;
                    $sql = "INSERT INTO fisic_person (id_customer, cpf, rg)
                    values (?,?,?)";
                    $del = "DELETE FROM legal_person WHERE id_customer=?";

                    $stmDel = DB::prepare($del);
                    $stmDel->execute(array($data->id));
                }
                $cpf_cnpj = $data->cpf;
                $rg_ie = $data->rg;
            } else {
                $sql = "SELECT * FROM legal_person WHERE id_customer=?";
                $stm = DB::prepare($sql);
                $stm->execute(array($data->id));

                if($stm->rowCount() > 0) {
                    $up = 1;
                    $sql = "UPDATE legal_person SET cnpj=?, ie=? WHERE id_customer=?";

                } else {
                    $up = 0;
                    $sql = "INSERT INTO legal_person (id_customer, cnpj, ie)
                    values (?,?,?)";
                    $del = "DELETE FROM fisic_person WHERE id_customer=?";

                    $stmDel = DB::prepare($del);
                    $stmDel->execute(array($data->id));
                }

                $cpf_cnpj = $data->cnpj;
                $rg_ie = $data->ie;
            }
            if($up == 1) {
                //atualizar
                $stm = DB::prepare($sql);
                $stm->execute(array(
                    $cpf_cnpj,
                    $rg_ie,
                    $data->id
                ));
            } else {
                //Inserir
                $stm = DB::prepare($sql);
                $stm->execute(array(
                    $data->id,
                    $cpf_cnpj,
                    $rg_ie
                ));
            }

            DB::commit();
        } catch (PDOException $e) {
            DB::rollBack();
            echo $e->getMessage();
        }


    }
    //verificar se vai precisar ja que vou utilizar os filters do angular
    public function fetch($id) {

    }

    public function fetchAll() {
        $sql = "SELECT c.id, c.firstName, c.lastName, c.address, c.number, c.neighborhood,
        c.cep, c.city, c.state, c.phone, c.celphone, c.email, c.person_type,
        f.cpf, f.rg, l.cnpj, l.ie
        FROM customer c
        LEFT JOIN fisic_person f
        ON c.id = f.id_customer
        LEFT JOIN legal_person l
        ON c.id = l.id_customer";
        $stm = DB::prepare($sql);
        $stm->execute();
        return $stm->fetchAll();

    }

    public static function delete($type, $id) {
        if($type == 0) {
            $sql = "DELETE FROM fisic_person, customer
                USING customer, fisic_person
                WHERE customer.id=fisic_person.id_customer
                AND fisic_person.id_customer=?";

            try{
                $stm = DB::prepare($sql);
                $stm->execute(array($id));
                return $stm->rowCount();
            } catch(PDOException $e) {
                echo "erro ao deletar: " . $e->getMessage();
            }


        } else {
            $sql = "DELETE FROM legal_person, customer
                USING customer, legal_person
                WHERE customer.id=legal_person.id_customer
                AND legal_person.id_customer=?";

            try{
                $stm = DB::prepare($sql);
                $stm->execute(array($id));
                return $stm->rowCount();
            } catch(PDOException $e) {
                echo "erro ao deletar: " . $e->getMessage();
            }
        }
    }

}
