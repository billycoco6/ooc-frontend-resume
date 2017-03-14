<template>
  <div class="posts">
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="col-md-9">
              <h3 style="font-size:18px">
                <a href="#">{{newDat.JobName}}
                </a>
              </h3>
              <p>
                <span class="glyphicon glyphicon-briefcase"></span>&nbsp;{{newDat.JobLocations}}
              </p>
              <p style="font-size:14px">
                <span class="glyphicon glyphicon-map-marker"></span>&nbsp;{{newDat.JobPlace}}
              </p>
              <p style="font-size:14px">{{newDat.JobDescriptionShort}}<br/>
                <span id="demo" class="collapse">{{newDat.JobDescriptionLong}}</span>
                <div href="#" class="btn btn-info" data-toggle="collapse" data-target="#demo">More Info...
                </div>&nbsp;&nbsp
                <div href="#" class="btn btn-warning" data-toggle="modal" data-target="#myModal">Apply
                </div>
              </p>
            </p>
          </div>
            <div class="col-md-3">
              <img :src="newDat.ImageLogo">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PostsApi from '../../api/posts.js'

export default {
  name: 'posts',
  props: ['mynews'],
  data () {
    return {
      limitNumber: 2,
      newDat: [
        {
          JobName: 'IT Auditor (Information Risk Management)',
          JobPlace: 'KPMG Phoomchai Audit Ltd.',
          JobLocations: 'Sathorn',
          JobDescriptionShort: 'Our IT Audit processionals help organizations enhance the effectiveness and efficiency of critical in-house governance, internal audit and regulatory compliance functions.',
          JobDescriptionLong: 'By focusing on regulatory and compliance, we help clients proactively comply with regulatory requirements (including SOX regulations) as well as effectively secure and monitor systems and data to help improve the compliance functions. We help mitigate regulatory and compliance risks that could lead to losses from non-compliance, litigation, or regulatory and compliance risks that could lead to losses from non-compliance, litigation, or regulatory sanctions and fines.',
          ImageLogo: 'image/IT_Auditor.JPG'
        }
      ],
      computed: {
        filteredItems: function () {
          return this.newDat.slice(0, this.limitNumber)
        }
      }
    }
  }
}
</script>

<style scoped>
  .posts {
    padding: 0 10px;
  }
</style>
