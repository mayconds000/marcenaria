<?php
class Payment{
  public function insert($data){
    $sql = "insert into payment_order (description, total_order, entry, discount,
      date_register, type, order_id) values (?, ?, ?, ?, ?, ?, ?)";
    $stm = DB::prepare($sql);
    try{
      $stm->execute(array(
        $data->description,
        $data->total_order,
        $data->entry,
        $data->discount,
        $data->date_register,
        $data->type,
        $data->order_id
      ));
      return $stm->fetch(DB::lastInsertId());
    }catch(PDOException $e){
      echo $e->getMessage();
    }
  }

  public function update($data){
    $sql = "update payment_order set description=?, total_order=?, entry=?, discount=?,
    date_register=?, type=?, order_id=?";

    $stm = DB::prepare($sql);
    try{
      $stm->execute(array(
          $data->description,
          $data->total_order,
          $data->entry,
          $data->discount,
          $data->date_register,
          $data->type,
          $data->order_id
      ));
      return $stm->rowCount();
    } catch(PDOException $e) {
      echo $e->getMessage();
    }
  }

  public function delete($data){
    $sql = "delete from payment_order where id=?";

    $stm = DB::prepare($sql);
    try{
      $stm->execute(array(
        $data->id
      ));
      return ;
    } catch(PDOException $e) {
      echo $e->getMessage();
    }
  }

  public function fetch($order){
    $sql = "select * from payment_order where order_id=?";

    $stm = DB::prepare($sql);
    try{
      $stm->execute(array(
        $order
      ));
      return ;
    } catch(PDOException $e) {
      echo $e->getMessage();
    }
  }
}
