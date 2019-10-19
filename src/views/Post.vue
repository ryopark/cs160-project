  <template>
    <div class="post">
      <h2 class="title">College Room</h2>
      <div class="mainEditor"> 
        <form>
        <label for="title">Create a New Post</label><br>
        <input type="text" id="title" name="title" placeholder="Enter a title.." v-model="title">
        <br>
        <textarea rows="4" cols="50" placeholder="Enter your text.." v-model="content">
        </textarea>
        </form>
        
        <button @click="cancel">Cancel</button>
        <button @click="submit">Submit</button>
      </div>
    </div>

  </template>

  <script>
  import VueTrix from 'vue-trix'
  import router from '../router'
  export default {
    components: {
      VueTrix
    },
    data() {
    return {
      title:'',
      content:'',
      errorMessage:null
    }
    },
    methods:{
      submit: function()
      {
        if(this.title=='')
        {
          this.errorMessage='Please enter a title'
        }
        if(!this.content=='')
        {
          this.errorMessage='Content can not be blank'
        }
        else{
          //TO DO store the data
          //router.push()
          ////need to redirect to {main post} page..
          ////.....
          ////####safe updated post to firebase. 

        }
      },
      cancel:function()
      {
        if(this.title || this.content)
        {
          window.prompt("sometext","defaultText");
          //pop up a message box 'are you sure you want to discard the change'
          //back to last page visted if yes stay otherwise
        }
      }

    }
  
  }
  </script>
  <style lang="scss"> 
  input[id=title]
  {
    width: 500px;
  }
  textarea
  {
    resize: none;
    width: 500px;
    height: 700px;
  }
  </style>

  