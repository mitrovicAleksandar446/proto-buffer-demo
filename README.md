# Google's protocol buffer demo

1. Download compiler:

    `https://github.com/protocolbuffers/protobuf/releases`
    
2. Compile proto schemas (example):
    
    `protoc --js_out=import_style=commonjs,binary:./compiled ./protos/employees.proto`