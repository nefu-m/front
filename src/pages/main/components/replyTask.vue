<template>
  <div>
    <Row>
      <Col>
        <Input
          v-model="replyInfo.content"
          type="textarea"
          placeholder="Enter something..."
          rows="20"
          :style="{width: '100%'}"
        ></Input>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button :style="{margin:'16px 0 0 0'}" long type="success">提交</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      replyInfo: {
        content: ""
      }
    };
  }
};
</script>