import boto3

# Configure AWS credentials
boto3.setup_default_session(
    aws_access_key_id='fakeAccessKeyId',
    aws_secret_access_key='fakeSecretAccessKey',
    region_name='us-west-2'
)

dynamodb = boto3.client('dynamodb', endpoint_url='http://localhost:8000')

try:
    dynamodb.create_table(
        TableName='Users',
        KeySchema=[
            {
                'AttributeName': 'email',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'email',
                'AttributeType': 'S'
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 5,
            'WriteCapacityUnits': 5
        }
    )
    print("Table created successfully.")
except dynamodb.exceptions.ResourceInUseException:
    print("Table already exists.")
