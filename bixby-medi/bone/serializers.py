from rest_framework import serializers
from . models import Bone


class BoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bone
        fields = '__all__'