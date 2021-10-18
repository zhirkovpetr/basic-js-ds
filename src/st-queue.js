module.exports = class Queue {
    constructor() {
        this.head = null
        this.last = null
    }

    getUnderlyingList() {
        return this.head
    }

    enqueue(value) {
      let node = new ListNode(value)
      if(!this.head){
        this.head = node
        this.last = this.head
      } else{
        this.last.next = node
        this.last = this.last.next
      }
    }

    dequeue() {
        let result = this.head.value
        this.head = this.head.next
        if (this.head.next !== null){
            this.last = null
        }
        return result
    }

}

function ListNode(x, nextX = null) {
  this.value = x
  this.next = nextX
}
