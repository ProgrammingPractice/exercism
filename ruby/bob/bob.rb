class BookKeeping
  VERSION = 1
end

class Bob
  class << self
    def hey(remark)
      if remark =~ /\A\s*\z/
        'Fine. Be that way!'
      elsif remark =~ /\A[A-Z\d\W]*[A-Z]+[A-Z\d\W]*\z/
        'Whoa, chill out!'
      elsif remark =~ /\?\s*\z/
        'Sure.'
      else
        'Whatever.'
      end
    end
  end
end