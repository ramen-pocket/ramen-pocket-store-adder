<template>
  <v-app>
    <v-content>
      <v-container>
        <v-card class="pa-5">
          <p v-if="hasError" class="display-1 error--text">Something went wrong! Please check the logs in devtool.</p>
          <v-form>
            <!-- name -->
            <h2>Name</h2>
            <v-row>
              <v-col>
                <v-text-field v-model="name" label="店名" hide-details :disabled="disabled"></v-text-field>
              </v-col>
            </v-row>

            <!-- location -->
            <h2>Location</h2>
            <v-row>
              <v-col cols="8">
                <v-text-field v-model="address" label="地址" hide-details :disabled="disabled"></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-text-field v-model="lng" label="經度" type="number" hide-details :disabled="disabled"></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-text-field v-model="lat" label="緯度" type="number" hide-details :disabled="disabled"></v-text-field>
              </v-col>
            </v-row>

            <!-- images -->
            <h2>Images</h2>
            <v-row>
              <v-col cols="4" v-for="(image, index) in images" :key="`img-column-${index}`">
                <v-text-field v-model="image.url" :label="`圖片 ${index +1} 連結`" hide-details :disabled="disabled"></v-text-field>
              </v-col>
            </v-row>

            <!-- businessHours -->
            <h2>Business Hours</h2>
            <v-row>
              <v-col cols="3" v-for="(businessHour, index) in businessHours" :key="`bns-column-${index}`">
                <v-card class="pa-3">
                  <v-card-title>{{ `星期${['一', '二', '三', '四', '五', '六', '日'][index]}` }}</v-card-title>
                  <v-card-text>
                    <v-switch v-model="businessHour.off" label="休息" :disabled="disabled"></v-switch>
                    <v-text-field v-model="businessHour.begin" label="開店時間" type="number" hide-details :disabled="disabled"></v-text-field>
                    <v-text-field v-model="businessHour.end" label="關店時間" type="number" hide-details :disabled="disabled"></v-text-field>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- courses -->
            <h2>Courses</h2>
            <v-row>
              <v-col cols="3" v-for="(course, index) in courses" :key="`course-column-${index}`">
                <v-card class="pa-5">
                  <v-text-field v-model="course.name" label="餐點名" hide-details :disabled="disabled"></v-text-field>
                  <v-switch v-model="course.isRamen" label="是拉麵" :disabled="disabled"></v-switch>
                  <v-text-field v-model="course.price" label="餐點價格" type="number" hide-details :disabled="disabled"></v-text-field>
                </v-card>
              </v-col>
            </v-row>

            <!-- tags -->
            <h2>Tags</h2>
            <v-row>
              <v-col cols="3" v-for="(tag, index) in tags" :key="`tag-column-${index}`">
                <v-card class="pa-5">
                  <v-text-field v-model="tag.name" label="標籤" hide-details :disabled="disabled"></v-text-field>
                </v-card>
              </v-col>
            </v-row>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" :disabled="disabled" :loading="disabled" @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data: () => ({
    disabled: false,
    hasError: false,
    name: '',
    address: '',
    lng: 0,
    lat: 0,
    images: [{ url: '' }],
    businessHours: new Array(7).fill(() => ({ off: false, begin: 8, end: 20 })).map((a) => a()),
    courses: [{ name: '', isRamen: false, price: 0 }],
    tags: [{ name: '' }]
  }),
  computed: {
    _courses () {
      return this.courses.filter((a) => !!a.name.trim())
        .map((a) => {
          const copy = { ...a }
          copy.price = +copy.price
          return copy
        })
    },
    _businessHours () {
      return this.businessHours.map((a) => {
        const copy = { ...a }
        copy.begin = +copy.begin
        copy.end = +copy.end
        return copy
      })
    },
    imagesUrl () {
      return this.images.filter((a) => !!a.url.trim())
        .map((a) => a.url.trim())
    },
    _tags () {
      return this.tags.filter((a) => !!a.name.trim())
        .map((a) => a.name.trim())
    },
    formdata () {
      return {
        name: this.name,
        location: {
          address: this.address,
          lng: +this.lng,
          lat: +this.lat
        },
        images: this.imagesUrl,
        businessHours: this._businessHours,
        courses: this._courses,
        tags: this._tags
      }
    }
  },
  watch: {
    'imagesUrl.length' () {
      this.images = [...this.imagesUrl.map((a) => ({ url: a })), { url: '' }]
    },
    '_courses.length' () {
      this.courses = [...this._courses, { name: '', isRamen: false, price: 0 }]
    },
    '_tags.length' () {
      this.tags = [...this._tags.map((a) => ({ name: a })), { name: '' }]
    }
  },
  methods: {
    reset () {
      this.disabled = false
      this.hasError = false
      this.name = ''
      this.address = ''
      this.lng = 0
      this.lat = 0
      this.images = [{ url: '' }]
      this.businessHours = new Array(7).fill(() => ({ off: false, begin: 8, end: 20 })).map((a) => a())
      this.courses = [{ name: '', isRamen: false, price: 0 }]
      this.tags = [{ name: '' }]
    },
    async submit () {
      this.disabled = true
      this.hasError = false
      try {
        await axios.post('https://api.virtualquantum.tw/stores', this.formdata)
        this.reset()
      } catch (error) {
        console.error(error)
        this.hasError = true
        this.disabled = false
      }
    }
  }
}
</script>
