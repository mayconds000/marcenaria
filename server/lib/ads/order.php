<?php
class Order {
    public function insert($data) {
        $sql = "INSERT INTO `order` (customer, date_register, status) VALUES (?,?,?)";
        $stm = DB::prepare($sql);
        try{
            $stm->execute(array(
                $data->id,
                date("Y-m-d"),
                $data->status
                ));
            $order = $this->fetch(DB::lastInsertId());
            return $order;
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function update($data) {
        $sql = "update `order` set customer=?, status=? where id=?";
        $stm = DB::prepare($sql);

        try{
            $stm->execute(array($data->customer, $data->status, $data->id));
            return $stm->rowCount();
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function delete($id) {
        $sql = "delete from `order` where id=?";
        $stm = DB::prepare($sql);

        try{
            $stm->execute(array($id));
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function fetch($id=null) {
        if($id){
            $sql = "select o.id, o.customer, o.date_register, s.description as status,
            c.firstName, c.lastName, c.address, c.number, c.neighborhood, c.city,
            c.state, c.phone, c.celphone, c.email from `order` o
            left join customer c on o.customer = c.id
            left join status_order s on o.status = s.id and o.id = ? ";
            $stm = DB::prepare($sql);
            try{
                $stm->execute(array($id));
                return $stm->fetch();
            } catch(PDOException $e) {
                echo $e->getMessage();
            }
        } else {
            $sql = "select o.id, o.customer,c.id, c.firstName, c.lastName, c.address,
            c.number, c.neighborhood, c.city, c.state, c.phone, c.celphone,
            c.email from `order` o left join customer c on o.customer = c.id
            where o.id=?";
            $stm = DB::prepare($sql);
            try{
                $stm->execute(array($id));
                return $stm->fetch();
            } catch(PDOException $e) {
                echo $e->getMessage();
            }
        }

    }

    public function fetchAll() {
        $sql = "select o.id, o.date_register, s.description as status, c.firstName, c.lastName,
        c.id as customer_id from `order` o left join customer c on o.customer = c.id
        inner join status_order s on o.status = s.id";
        $stm = DB::prepare($sql);
        try{
            $stm->execute();
            return $stm->fetchAll();
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }
}
