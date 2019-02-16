<template>
  <div>
    <sui-segment v-for="(items,indexGroup) in groupUi" :key="indexGroup" class="ct-row">
      <div v-for="(item,indexItem) in items" :key="indexItem" class="ct-row__content">
        <template v-if="item.col1 === null">
          <sui-dropdown
            placeholder="Select data type"
            selection
            :options="col1"
            v-model="item.col1"
            @input="changeTypeItem({itemType: item.col1, indexGroup, indexItem})"
          />
        </template>
        <template v-else>
          <sui-dropdown
            placeholder="Select data type"
            selection
            :options="col1"
            v-model="item.col1"
            @input="changeTypeItem({itemType: item.col1, indexGroup, indexItem})"
          />
          <sui-dropdown
            selection
            :options="item.col2.operate"
            v-model="item.col2.value"
            @input="changeOperate(null)"
          />
          <datepicker
            :value="item.col3.value"
            v-model="item.col3.value"
            :format="formatDate"
            v-if="item.col3.type === 'date'"
          ></datepicker>
          <sui-input
            v-else
            :value="item.col3.value"
            :type="item.col3.type"
            v-model="item.col3.value"
          />
          <sui-button icon="close icon" @click="removeItem({indexGroup, indexItem})"/>
        </template>
      </div>
      <sui-button @click="addItem(indexGroup)">Add item</sui-button>
    </sui-segment>

    <sui-button primary @click="addGroup">Add group</sui-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Datepicker from "vuejs-datepicker";
import { TYPE_ITEM, FORMAT_DATE } from "../constants";
export default {
  name: "HelloWorld",
  components: {
    Datepicker
  },
  data() {
    return {
      itemType: null,
      col1: [
        { value: ["First name", TYPE_ITEM.String], text: "First name" },
        { value: ["Last name", TYPE_ITEM.String], text: "Last name" },
        { value: ["Birthday", TYPE_ITEM.Date], text: "Birthday" },
        { value: ["Last updated", TYPE_ITEM.Date], text: "Last updated" },
        { value: ["Sign up date", TYPE_ITEM.Date], text: "Sign up date" },
        { value: ["Email address", TYPE_ITEM.String], text: "Email address" },
        { value: ["Phone number", TYPE_ITEM.String], text: "Phone number" },
        { value: ["Height", TYPE_ITEM.Number], text: "Height" },
        { value: ["Just a number", TYPE_ITEM.Number], text: "Just a number" },
        { value: ["Weight", TYPE_ITEM.Number], text: "Weight" },
        { value: ["Age", TYPE_ITEM.Number], text: "Age" }
      ],
      formatDate: FORMAT_DATE
    };
  },
  computed: {
    ...mapGetters(["groupUi"])
  },
  watch: {
    itemType() {}
  },
  methods: {
    ...mapActions([
      "addGroup",
      "addItem",
      "changeTypeItem",
      "changeOperate",
      "removeItem"
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ct-row .ct-row__content {
  margin-bottom: 10px;
}
.ct-row .ct-row__content > div {
  margin-right: 10px;
}

.vdp-datepicker {
  display: inline-block;
}
</style>
