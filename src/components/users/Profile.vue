<template lang="html">

  <div class="profile">
    <md-card class="card-example">
      <md-card-area md-inset><br>
    <center><img class="img-circle" src="../../assets/TestCard.png"></center>

    <md-card-header>
      <h2 class="md-title">Coffee House</h2>
      <div class="md-subhead">
        <md-icon>location_on</md-icon>
        <span>2 miles</span>
      </div>
    </md-card-header>

    <md-card-content>
      Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.
    </md-card-content>
  </md-card-area>

  <md-card-content>
    <h3 class="md-subheading">Today's availability</h3>
    <div class="card-reservation">
      <md-icon>access_time</md-icon>
      <md-button-toggle md-single class="md-button-group">
        <md-button>5:30PM</md-button>
        <md-button>7:30PM</md-button>
        <md-button>9:00PM</md-button>
      </md-button-toggle>
    </div>
  </md-card-content>

  <md-card-actions>
    <md-button class="md-primary">Reserve</md-button>
  </md-card-actions>
</md-card>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
.card-example {
  .md-subhead {
    .md-icon {
      $size: 16px;

      width: $size;
      min-width: $size;
      height: $size;
      min-height: $size;
      font-size: $size;
      line-height: $size;
    }

    span {
      vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .md-icon {
      margin: 8px;
      color: rgba(#000, .54) !important;
    }

    .md-button {
      border-radius: 2px !important;
    }
  }
}

.img-circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
</style>
